const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "A hotel must have a name:"],
    },
    country:{
        type: String,
        trim: true,
        required: [true, "A hotel must have a country:"],
    },
    city:{
        type: String,
        trim: true,
        required: [true, "A hotel must have a city:"],
    },
    address: {
        type: [String],
        required: [true, "Please provide your address"],
        trim: true,
      },
      location: {
        type: { type: String, default: "Point" }, // storing location of type point only
        coordinates: { type: [Number], required: true },
      },
    price:{
        type: Number,
        trim: true,
        required: [true, "A hotel must have a price:"],
    },
    totalPrice:{
      type: Number,
        trim: true,
        required: [true, "A hotel must have a price:"],
    },
    image:{
        type: [String],
       // trim: true,
        required: [true, "A hotel must have a image:"],
    },
    roomtypes:{
        type:[{
        type: Number,
        enum:[1,2,3,4,5],
       // required: [true, "A hotel must have a rooms:"],
    }],
    required: [true, "A hotel must have rooms:"],
},
    facility:[
        {
          type: String,
          enum: [
           "Free Wifi",
"Non-Smoking",
"Free Breakfast",
"Free parking",
"Pet Friendly",
"Bathtub in room",
"Bar",
"Gym",
"Casino",
"Spa",
"Restaurant",
"Pool",
"Childcare",
"Connecting rooms",
"Cribs"
          ],
        },
      ],
      Families:[{
        type: String,
        trim: true,
        required: [true, "A hotel must have a rooms:"],
      }],
    Theme:[{
      type: String,
          enum: [
            "Luxury",
            "Romantic",
           " Family-friendly",
            "Business",
            "Adventure",
            "Spa Hotel",
            "Beach"
          ],
    }],
    StarRating:{
      type: Number,
        Required:[true,"A hotel must have a StarRating:"],
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"],
    },
      ratingAverage: {
        type: Number,
        default: 4.0,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"],
        set: (val) => Math.round(val * 10) / 10,
      },
      ratingsQuantity: {
        type: Number,
        default: 0,
      },
      HotelServiceRating:{
        type:Number,
        default: 4.0,
       min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    HotelConditionRating:{
        type:Number,
        default: 4.0,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    RoomComfortRating:{
        type:Number,
        default: 4.0,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    CleanlinessRating:{
        type:Number,
        default: 4.0,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"]
    },
    oneStar:{
      type:Number,
      default:0
    },
    twoStar:{
      type:Number,
      default:0
    },
    threeStar:{
      type:Number,
      default:0
    },
    fourStar:{
      type:Number,
      default:0
    },
    fiveStar:{
      type:Number,
      default:0
    },
    NearHotel:[
      {
        type: String,
        trim: true,
        required: [true, "A hotel must have a NearArea:"],
      },
    ],
      About_hotel:{
        type:String,
        trim: true,
        required: [true, "A hotel must have a About_hotel:"],
        maxlength: [500, "Length of About_hotel must be less than 500"],
      },
      Policies:{
        type:String,
        trim: true,
        required: [true, "A hotel must have a About_hotel:"],
       
      },
      active:{
        type:Boolean,
        default: true,
        select: false,
      }    
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
hotelSchema.index({price:1,ratingAverage:-1});
hotelSchema.index({location:'2dsphere'});

 hotelSchema.virtual("reviews", {
     ref: "Review",
     foreignField: "hotel",
     localField: "_id",
   });
//all these middlewares works only with SAVE and CREATE

hotelSchema.pre(/^find/, function (next) {
    //for all queries starting with find
    //as it is a query middleware, this refers to current query
    this.find({ active: { $ne: false } });
    next();
  });

const Hotel=mongoose.model("Hotel",hotelSchema);

module.exports = Hotel;