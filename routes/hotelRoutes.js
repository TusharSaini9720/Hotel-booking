const express=require('express');
const hotelcontroller=require('./../controller/hotelController');
const authcontroller=require('./../controller/authController');
const reviewcontroller=require('./../controller/reviewController');
const reviewrouter=require('./reviewRoutes');
const hotelRoutes = express.Router();

hotelRoutes.get("/images/:fileName", hotelcontroller.sendImage);
hotelRoutes.get("/images/world/:fileName", hotelcontroller.sendImage1);
hotelRoutes.use('/:hotelId/reviews',reviewrouter);

hotelRoutes.get("/",hotelcontroller.getallhotel);
hotelRoutes.post("/",hotelcontroller.createhotel);

hotelRoutes
.route('/hotels-within/:distance/center/:latlng/unit/:unit')
.get(hotelcontroller.hotelswithin);
// hotels-within/233/center/-80.1917,27.7681/unit/mi
hotelRoutes
.route('/distances/:latlng/unit/:unit')
.get(hotelcontroller.hotelsposition);

hotelRoutes.route('/:id')
.get(hotelcontroller.gethotel)
.patch(
    
    hotelcontroller.uploadHotelPhoto,
    hotelcontroller.resizeHotelPhoto,
    hotelcontroller.updatehotel)
.delete(hotelcontroller.deletehotel);
// hotelRoutes.route('/rooms/:id').patch( hotelcontroller.uploadHotelPhoto,
//     hotelcontroller.resizeHotelroomPhoto,
//     hotelcontroller.updatehotel)
//https://images.unsplash.com/photo-1631048730670-ff5cd0d08f15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

module.exports=hotelRoutes;