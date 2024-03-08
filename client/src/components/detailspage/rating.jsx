import React from "react";
import { ProgressBar } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cardforreviews from "../Cards/cardforreviews";

function Rating(props) {
  //console.log("in rating ",props);
  const { innerWidth: width, innerHeight: height } = window;

  var settings = {
    infinite: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: width > 768 ? 3 : 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rating">
      <p
        style={{
          textAlign: "center",
          fontSize: "165%",
          fontWeight: "550",
        }}
      >
        Rating and Reviews
      </p>

      <div className="rcategory">
        <div className="ratingbox">
          <div className="actualrating">
            <p
              style={{
                fontSize: "xx-large",
                margin: 0,
                color: "rgb(15,228,2)",
                textAlign: "center",
              }}
            >
              {/* {props.reviews.overview.overall} */}
              <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.hotel.ratingAverage ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "xx-large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "xx-large" }}></span>
        )
      );
    })}
    
  </div>
             
            </p>
          </div>
          <p
            style={{
              fontSize: "xx-large",
              color: "white",
              textAlign: "center",
            }}
          >
            {/* {props.reviews.overview.qualitativeBadgeText} */}
            {props.hotel.ratingAverage}
          </p>
          <p
            style={{
              fontSize: "large",
              margin: 0,
              color: "white",
              textAlign: "center",
            }}
          >
            {/* {props.reviews.overview.totalCount} reviews */}
           Reviews {props.hotel.ratingsQuantity}
          </p>
        </div>

        <div className="starbox">
          <div>
            <p style={{ margin: 0, display: "inline"}}>
          5 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="success"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.hotel.fiveStar /
                  props.hotel.ratingsQuantity) *
                100
              } 
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.hotel.fiveStar}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              4 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="primary"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.hotel.fourStar /
                  props.hotel.ratingsQuantity) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.hotel.fourStar}
              
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              3 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="info"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.hotel.threeStar /
                  props.hotel.ratingsQuantity) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.hotel.threeStar}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              2 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="warning"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.hotel.twoStar /
                  props.hotel.ratingsQuantity) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.hotel.twoStar}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              1 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="danger"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.hotel.oneStar /
                  props.hotel.ratingsQuantity) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.hotel.oneStar}
            </p>
          </div>
        </div>
        <div className="categorybox">
          <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
            <p
              style={{
                margin: 0,
                fontSize: "120%",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Categories:
            </p>
          </div>
          <div>
            <p style={{ margin: 0 }}>Hotel Service</p>
            <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.hotel.HotelServiceRating ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        )
      );
    })}
    <p style={{ display: "inline", marginLeft: "5px" ,fontSize:"large"}}>
              {props.hotel.HotelServiceRating}
            </p>
  </div>
          </div>
          <div>
            <p style={{ margin: 0 }}>Room Comfort</p>
            <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.hotel.RoomComfortRating ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        )
      );
    })}
    <p style={{ display: "inline", marginLeft: "5px" ,fontSize:"large"}}>
              {props.hotel.RoomComfortRating}
            </p>
  </div>
          </div>
          <div>
            <p style={{ margin: 0 }}>Hotel Condition</p>
            <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.hotel.HotelConditionRating ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        )
      );
    })}
    <p style={{ display: "inline", marginLeft: "5px" ,fontSize:"large"}}>
              {props.hotel.HotelConditionRating}
            </p>
  </div>
          </div>
          <div>
            <p style={{ margin: 0 }}>Cleanliness</p>
            <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.hotel.CleanlinessRating ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        )
      );
    })}
    <p style={{ display: "inline", marginLeft: "5px" ,fontSize:"large"}}>
              {props.hotel.CleanlinessRating}
            </p>
  </div>
          </div>
        </div>
      </div>
      <div className="reviewslider" style={{ margin: "40px 0" }}>
        {props.hotel.reviews.length >1 ? (
          <Slider {...settings}>
            {props.hotel.reviews.map((review) => {
              if (review.recommendedBy === "" || review.review === "")
                return null;
              return (
                <Cardforreviews
                  // name={review.recommendedBy}
                  // rating={review.rating}
                  // badge={review.qualitativeBadgeText}
                  // title={review.title}
                  // summary={review.summary}
                  review={review}
                />
              );
            })}
            {props.hotel.reviews!== undefined
              ? props.hotel.reviews.map((review) => {
                  if (review.recommendedBy === "" || review.review === "")
                    return null;
                  return (
                    <Cardforreviews
                      // name={review.recommendedBy}
                      // rating={review.rating}
                      // badge={review.qualitativeBadgeText}
                      // title={review.title}
                      // summary={review.summary}
                      review={review}
                    />
                  );
                })
              : null}
          </Slider>
        ) : (
          <p
            style={{ textAlign: "center", fontSize: "xx-large", color: "red" }}
          >
            Oops! No reviews yet.
          </p>
        )}
      </div>
   </div>
  
    );

  

  {/* </div> return(<>
    {props.hotel !== undefined && props.hotel.reviews !== undefined ? ( */}
  {/* //     <div className="reviews">
  //       <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
  //         Rating and Reviews
  //       </h3>
  //       <div className="rating">
  //         <div className="ratingbox">
  //           <p className="actualRating">{props.hotel.ratingAverage}</p>
  //           <p */}
  {/* //             style={{
  //               color: "white",
  //               fontSize: "x-large",
  //               textAlign: "center",
  //               fontWeight: "bold",
  //             }} */}
  {/* //           >
  //             {props.hotel.ratingAverage === 1
  //               ? "Aweful"
  //               : props.hotel.ratingAverage === 2
  //               ? "Not Good"
  //               : props.hotel.ratingAverage === 3
  //               ? "Average"
  //               : props.hotel.ratingAverage === 4
  //               ? "Good"
  //               : "Fantastic"}
  //           </p> */}
  {/* //           <p
  //             style={{
  //               color: "white",
  //               fontSize: "large",
  //               textAlign: "center",
  //             }}
  //           >
  //             {props.hotel.ratingsQuantity} reviews
  //           </p> */}
  {/* //         </div>
  //         <div className="reviewSlider">
  //           <Slider {...settings}>
  //             {props.hotel.reviews.map((review) => (
  //               <Cardforreviews review={review}></Cardforreviews>
  //             ))}
  //           </Slider>
  //         </div>
  //       </div>
  //     </div>
  //   ) : (
  //     ""
  //   )}
  //   </>
// ) */}
}
export default Rating;
