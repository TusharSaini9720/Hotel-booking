import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";




function Cardforhotellist(props) {
   
  return (
    <Link
      style={{ textDecoration: "inherit", color: "inherit" }}
      to={{ pathname:`/details`,
        state:{ 
          name: props.city,
          guestsnumber: props.gnumber,
          startdate: props.startdate,
          enddate: props.enddate,
          hotel_id: props.hotelid,
          image: props.image,
          place: props.region,
          starRating: props.starRating,
          rating: props.rating,
          badge: props.remark,
          reviewss: props.numberofreviews,
          namee: props.name,
        },
      }}
      
    >
      <div className="cardforhotellist">
        <div className="hotelimage">
          <img src={props.image} alt="imagee not available"></img>
        </div>
        <div className="centerdata">
          <p
            style={{
              fontSize: "x-large",
              display: "inline",
              fontWeight: "600",
              lineHeight: "78%",
            }}
          >
            {props.name}
          </p>
          <br/>
          <div style={{ display: "flex", alignItems: "center" }}>
  
  <div className="star-rating" style={{ marginLeft: "5px",alignItems: "center" }}>
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.starRating ? (
          <FaStar style={{ color: "#FFD43B", fontSize: "x-large" }}/>
        ) : (
          <FaRegStar style={{ color: "#FFD43B", fontSize: "x-large" }}/>
        )
      );
    })}
  </div>
  <span
    style={{
      fontSize: "large",
      fontWeight: "bold",
      display: "inline",
      color: "crimson",
      marginLeft: "5px",
    }}
  >
    {props.starRating}-star
  </span>
</div>

          <p
            style={{
              fontSize: "small",
              margin: 0,
              marginTop: "-5px",
              marginBottom: "5px",
            }}
          >
            {props.address}
          </p>
          <p className="locality">
          {props.region}
          </p>
          {/* <ul className="distance">
            <li>
              {props.distance1} to {props.label1}
            </li>
            {props.distance2 !== null ? (
              <li className="seconddistance">
                {props.distance2} to {props.label2}
              </li>
            ) : null}
          </ul> */}
          
          <div className="hotelrating">
            <p style={{ fontSize: "larger", margin: 0, color: "white" }}>
              {props.rating}
            </p>
          </div>
          <p
            style={{
              fontSize: "larger",
              margin: 0,
              display: "inline",
              color: "black",
            }}
          >
            {props.remark} 
          </p>
          <p style={{ fontSize: "small", margin: 0 }}>
            {props.numberofreviews} reviews
          </p>
        </div>
        <div className="rightdata">
          <p
            style={{
              fontSize: "x-large",
              margin: 0,
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            <FaDollarSign style={{marginRight:"2px"}}/>{props.price}/-
          </p>
          <p
            style={{
              fontSize: "16px",
              textAlign: "right",
              margin: "-2px 0px 4px 35px",
              lineHeight: "80%",
            }}
          >
            per room per night
          </p>
          <p
            style={{
              fontSize: "small",
              margin: 0,
              color: "black",
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            <FaDollarSign style={{marginRight:"2px"}}/>{props.totalPrice
              // ? props.totalPrice.includes("nights") ||
              //   props.totalPrice.includes("guests")
              //   ? props.totalPrice
              //       .replace("total", "")
              //       .replaceAll("&nbsp;", " ")
              //       .replace("1 room,", "")
              //   : undefined
              // : undefined}
            }/-
          </p>
          <p style={{ fontSize: "small", margin: 0, textAlign: "right" }}>
            exclusive of taxes & fees
          </p>

          <p
            style={{
              fontSize: "small",
              margin: "3px 0",
              float: "right",
              padding: "0px 10px",
              backgroundColor: "forestgreen",
              color: "white",
              borderRadius: "15px",
            }}
          >
            {props.cancellation}
          </p>
          <p
            style={{
              fontSize: "small",
              margin: "3px 0",
              clear: "both",
              float: "right",
              padding: "0px 10px",
              backgroundColor: "forestgreen",
              color: "white",
              borderRadius: "15px",
            }}
          >
            {props.payment}
          </p>
          <p
            style={{
              fontSize: "small",
              margin: "3px 0",
              clear: "both",
              float: "right",
              padding: "0px 10px",
              backgroundColor: "forestgreen",
              color: "white",
              borderRadius: "15px",
            }}
          >
            {props.cc}
          </p>

          <p className="moredetails" style={{ clear: "both" }}>
            More Details
          </p>
        </div>
      </div>
    </Link>
  );
}
export default Cardforhotellist;
