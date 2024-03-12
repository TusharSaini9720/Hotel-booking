const Hotel=require('./../models/hotelModel');
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)
const User=require('../models/userModel');
const Booking=require('../models/bookingModel');
exports.getcheckoutSession=async(req,res)=>{
  const hotel=await Hotel.findById(req.params.hotelid);
  // console.log(hotel);
  const session=await stripe.checkout.sessions.create({
    payment_method_types:['card'],
     mode: 'payment',
    success_url:`${req.protocol}://${req.get("host")}`,
    cancel_url:`${req.protocol}://${req.get("host")}/${req.params.hotelid}`,
    customer_email:req.user.email,
    client_reference_id:req.params.hotelid,
    line_items: [{
        price_data: {
            currency: 'usd',
            product_data: {
                name: hotel.name,
                description: hotel.About_hotel,
                images: [
                   hotel.image[0]
                ],
            },
            unit_amount: hotel.totalPrice * 100,
        },
        quantity: 1
    }]
})
res.status(200).json({
    status:"success",
    session
})
}

const createBookingCheckout = async (session) => {
    const hotel = session.client_reference_id;
    const user = (await User.findOne({ email: session.customer_email }))
      .id;
    const price = session.line_items[0].price_data.unit_amount / 100;
    // const startingDate = session.metadata.startingDate;
    // const services = session.metadata.services.split(",");
    await Booking.create({ hotel, user, price});
  };
  exports.webhookCheckout = async (req, res, next) => {
    const signature = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    if (event.type === "checkout.session.completed")
      createBookingCheckout(event.data.object);
    //console.log("it is working");
    res.status(200).json({ received: true });
  };