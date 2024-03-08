const mongoose=require('mongoose');
const Hotel=require('./hotelModel');

const reviewschema=new mongoose.Schema({
    review:{
        type:String,
        trim: true,
        required: [true, "A review must have a review:"],
        maxlength: [500, "Length of review must be less than 500"],
    },
    rating:{
        type:Number,
        required: [true, "A review must have a rating:"],
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    HotelServiceRating:{
        type:Number,
        required: [true, "Please give some Hotel Service Rating:"],
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    HotelConditionRating:{
        type:Number,
        required: [true, "Please give some Hotel Condition Rating"],
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    RoomComfortRating:{
        type:Number,
        required: [true, "Please give some Room Comfort Rating"],
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    CleanlinessRating:{
        type:Number,
        required: [true, "Please give some Cleanliness Rating"],
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    hotel:{
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: [true, "A review must belongs to a hotel:"],
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "A review must belongs to a user:"],
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });

  reviewschema.index({hotel:1,user:1},{unique:true});

  reviewschema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"name photo"
    });
    next();
  });

  reviewschema.statics.calcAverageRating=async function(hotelId){
    //console.log(hotelId);
    const stats=await this.aggregate([
        {
            $match:{hotel:hotelId}
        },
        {
            $group:{
                _id:'$hotel',
                nRating:{$sum:1},
                avgRating:{$avg:'$rating'},
                avgHotelServiceRating:{$avg:'$HotelServiceRating'},
                avgHotelConditionRating:{$avg:'$HotelConditionRating'},
                avgRoomComfortRating:{$avg:'$RoomComfortRating'},
                avgCleanlinessRating:{$avg:'$CleanlinessRating'},

                 oneStar: { $sum: { $cond: [{ $eq: ['$rating', 1] }, 1, 0] } },
                  twoStar: { $sum: { $cond: [{ $eq: ['$rating', 2] }, 1, 0] } },
                threeStar: { $sum: { $cond: [{ $eq: ['$rating', 3] }, 1, 0] } },
                 fourStar: { $sum: { $cond: [{ $eq: ['$rating', 4] }, 1, 0] } },
                fiveStar: { $sum: { $cond: [{ $eq: ['$rating', 5] }, 1, 0] } }
            }
        }
    ]);
   // console.log(stats);
   if(stats.length>0){ await Hotel.findByIdAndUpdate(hotelId,{
        ratingAverage:stats[0].avgRating,
        ratingsQuantity:stats[0].nRating,
        HotelServiceRating:stats[0].avgHotelServiceRating,
        HotelConditionRating:stats[0].avgHotelConditionRating,
        RoomComfortRating:stats[0].avgRoomComfortRating,
        CleanlinessRating:stats[0].avgCleanlinessRating,
        oneStar:stats[0].oneStar,
        twoStar:stats[0].twoStar,
        threeStar:stats[0].threeStar,
        fourStar:stats[0].fourStar,
        fiveStar:stats[0].fiveStar
    })}
    else{
        await Hotel.findByIdAndUpdate(hotelId,{
            ratingAverage:4.0,
            ratingsQuantity:0,
            HotelServiceRating:4.0,
            HotelConditionRating:4.0,
            RoomComfortRating:4.0,
            CleanlinessRating:4.0,
            oneStar:0,
            twoStar:0,
            threeStar:0,
            fourStar:0,
            fiveStar:0
        })
    }
  }
  reviewschema.post('save',function(){
    this.constructor.calcAverageRating(this.hotel);
  });

//   reviewschema.pre(/^findOneAnd/,async function(next){
//     const r=await this.findOne();
//     console.log("this.r ",r);
//    // next();
//   })
  reviewschema.pre(/^findOneAnd/, async function(next) {
    // Accessing the query being executed
   try{  this.r=await this.findOne().clone();
   //console.log("in pre");
   //this.r = await Review.findById({ _id: req.params.id });
    // console.log("this.r ",this.r);
    // console.log("Query:", this.getQuery());   
    // // Accessing the update being applied (if applicable)
    // console.log("Update:", this.getUpdate());
    // Proceed to the next middleware in the chain
    next();}
    catch(err){
        console.log(err);
    }
});
  reviewschema.post(/^findOneAnd/,async function(){ 
   // console.log('inpost',this.r.hotel);
         await this.r.constructor.calcAverageRating(this.r.hotel) 
  })
  

  const Review=mongoose.model("Review",reviewschema);
  module.exports=Review;