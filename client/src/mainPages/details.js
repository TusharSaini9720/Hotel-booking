import React from "react";
import Header from "../components/detailspage/header";
import Starter from "../components/detailspage/starter";
import Rating from "../components/detailspage/rating";
import Highlights from "../components/detailspage/highlights";
import Inhotel from "../components/detailspage/inhotel";
import Inroom from "../components/detailspage/inroom";
import Footer from "../components/footer/footer";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
function Details(props) {
  //console.log("token in detail",props.token);
  //console.log("detail",)
  let history = [];
  const location = useLocation();
  //console.log("location",location.state);
  const {
    name,
    startdate,
    enddate,
    guestsnumber,
    hotel_id,
    image, 
    badge,
    rating,
    starRating,
    reviewss,
    place,
    namee,
  } = location.state;
 // console.log("props.hotel",hotel_id);
  const [adults_number, setadults_number] = React.useState(guestsnumber);
  const [checkin, setcheckin] = React.useState(startdate);
  const [checkout, setcheckout] = React.useState(enddate);

  const [details, setdetails] = React.useState({});
  const [photos, setphotos] = React.useState([]);
  const [reviews, setreviews] = React.useState({});
  //const images = [];

  //  var optionsfordetails = {
  // //   method: "GET",
  // //   url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details",
  // //   params: {
  // //     adults_number: adults_number,
  // //     checkin_date: checkin,
  // //     locale: "en_US",
  // //     currency: "INR",
  // //     hotel_id: hotel_id,
  // //     checkout_date: checkout,
  // //   },
  // //   headers: {
  // //     "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
  // //     "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
  // //   },
  //  };
  // //var optionsforphotos = {
  // //   method: "GET",
  // //   url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos",
  // //   params: { hotel_id: hotel_id },
  // //   headers: {
  // //     "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
  // //     "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
  // //   },
  // // };
  // // var optionsforreviews = {
  // //   method: "GET",
  // //   url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews",
  // //   params: { locale: "en_US", hotel_id: hotel_id, page_number: "1" },
  // //   headers: {
  // //     "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
  // //     "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
  // //   },
  // };

  var optionsforhistory = {
    method: "PATCH",
    url: "/api/v1/users/addHistory",
    headers: {
      "Authorization":`Bearer ${props.token}`,
      "Content-Type": "application/json",
    },
    data: {
      history: {
        hotelId: hotel_id,
        image: image,
        hotelName: namee,
        place: place,
        starRating: starRating,
        rating: rating,
        badge: badge,
        reviews: reviewss,
      },
    },
  };
  // const url=`http://localhost:3000/api/v1/hotels/${useParams().hotel_id}`;
  const url=`http://localhost:3000/api/v1/hotels/${hotel_id}`;

  React.useEffect(() => {
    // fetchdetails();
    axios({mathod:'GET',url:url})
    .then((res)=>{
       setdetails(res.data.data.Hotel);
     }).catch((err)=>{
      console.log(err);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, checkout, adults_number, hotel_id]);


  React.useEffect(() => {
    createhistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel_id]);

  const createhistory = () => {
    if (props.signedIn && image !== "") {
      axios(optionsforhistory)
        .then((res) => {
          history = res.data.data.user.history;
         
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    return () => {
      if (history.length > 0) props.sethistory(history);
      // componentwillunmount in functional component.
      // Anything in here is fired on component unmount.
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    details.country === undefined
  )
    return (
      <div className="loaderforlist">
        <Loader type="Bars" color="#0d6efd" height={100} width={100} />
      </div>
    );

  return (
    <>
      <div className="details">
        <Header
          name={details.name}
           address={details.address[0]}
          starrating={details.ratingAverage}
          price={details.price}
          totalPrice={details.totalPrice}
          tagline={details.price}
          free={details.price}
          id={hotel_id}
          signedIn={props.signedIn}
          token={props.token}
        />
        <hr />
        <Starter
          photos={details.image}
          city={name}
          startdate={startdate}
          enddate={enddate}
          guestsnumber={guestsnumber}
        />
        <hr />
        <Rating hotel={details} />
        <hr /> 
        
        <Highlights array={details.facility} />
        <hr />
        {/*
        <Inhotel array={details.amenities[0].listItems} />
        <hr />
        <Inroom array={details.amenities[1].listItems} />
        <hr /> */}
        <div className="policies">
          <p
            style={{
              textAlign: "center",
              fontSize: "165%",
              fontWeight: "550",
            }}
          >
            Policies
          </p>
          {/* <div className="policypara">
            {parse(`${details.smallPrint.policies}`)}
          </div> */details.Policies}
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
        }

export default Details;
