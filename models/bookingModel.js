const mongoose=require('mongoose');

const BookingSchema=new mongoose.Schema({
    hotel:{
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: [true, "A booking must belongs to a hotel:"],
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "A booking must belongs to a user:"],
    },
    price:{
    type: Number,
    required: [true, "A booking must have a price:"],
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    startingDate: {
        type: Date,
        required: [true, "Booking must have a starting date! "],
        min: [Date.now() - 10 * 60 * 1000, "Invalid starting date! "],
        max: [
          Date.now() + 7 * 24 * 60 * 60 * 1000,
          "Booking day must start in next 7 days! ",
        ],
      },
      endingDate:{
        type: Date,
        required: [true, "Booking must have a ending date! "],
        min: [Date.now() - 10 * 60 * 1000, "Invalid ending date! "],
      }

});

BookingSchema.pre('/^find/',function(next){
    this.populate('user').populate({
        path:'hotel',
        select:'name'
    })
    next();
})

const Booking=mongoose.model("Booking",BookingSchema);
module.exports=Booking;
