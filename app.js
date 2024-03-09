const express = require("express");
const app = express();
const hotelrouter=require('./routes/hotelRoutes');
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const bookingRouter=require("./routes/bookingRoutes");
const bookingcontroller=require('./controller/bookingcontroller')
//for security
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");

const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP.Please try after one hour",
});
app.use(express.json());
const path = require("path");
__dirname = path.resolve();
const bookingRoutes = require("./routes/bookingRoutes");

//limiting requests from same api
app.use("/api/v1/users", limiter); //also if app get crashed it will automatically set limit to max

//setting security http headers
app.use(helmet());

//Data sanitization against NOSQL query injection
app.use(mongoSanitize());

//Data sanitization against xss attacks
app.use(xss());

app.use(hpp());
//to get data of requests body and limiting it to maximum 10kb
// app.use(cors());
//app.use(cors({credentials: true,  origin: 'https://hotel-booking-sp0k.onrender.com'}));
app.use(cors({ origin: "*" }));
// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       scriptSrc: ["'self'", "https://js.stripe.com"],
//       frameSrc: ["self", "https://js.stripe.com", "https://hooks.stripe.com"],
//     },
//   })
// );

app.post(
  "/webhooks",
  express.raw({ type: "application/json" }),
  bookingcontroller.webhookCheckout
);
// app.post('/',bookingcontroller.createBookingCheckout1);
//to read cookie from request
app.use(cookieParser());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(compression());

//Routes middleware
app.use('/api/v1/hotels',hotelrouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/booking",bookingRouter);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.get("*", (req, res) => {
  res.redirect(`${req.protocol}://${req.get("host")}`);
});
module.exports = app;
