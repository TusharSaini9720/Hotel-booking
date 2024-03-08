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
