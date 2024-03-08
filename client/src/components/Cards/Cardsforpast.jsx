import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

function Cardforpast(props) {
 // console.log("history",props.history);
  const deleteCard = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.display = "none";
    var optionsforhistory = {
      method: "DELETE",
      url: "/api/v1/users/deleteHistory",
      headers: {
        "Authorization":`Bearer ${props.token}`,
        "Content-Type": "application/json",
      },
      data: {
        history: {
          _id: props.history._id,
        },
      },
    };
    axios(optionsforhistory)
      .then((res) => {
        props.sethistory(res.data.data.user.history);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Link
      style={{ textDecoration: "inherit", color: "inherit" }}
      to={{
        pathname: "/details",
        state: {
          name: props.history.place,
          guestsnumber: 2,
          startdate: moment().format("YYYY-MM-DD"),
          enddate: moment().add(1, "days").format("YYYY-MM-DD"),
          hotel_id: props.history.hotelId,
          image: "",
          place: "",
          starRating: 0,
          rating: 0,
          badge: "",
          reviewss: "",
          namee: "",
        },
      }}
    >
      <div className="cardforpast">
       <img
          src={props.history.image}
          alt="Not available"
          className="imageforcard"
          style={{height: "200px" }}
        />
        <div style={{ paddingTop: "15px", whiteSpace: "90%" }}>
          <p
            style={{
              fontSize: "150%",
              marginBottom: "5px",
              lineHeight: "95%",
              whiteSpace: "initial",
            }}
          >
            {props.history.hotelName}
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
  
  <div className="star-rating" style={{ marginLeft: "5px" }}>
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.history.starRating ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "x-large" }}></span>
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
    {props.history.starRating}-star
  </span>
</div>
          {/* <p
            style={{
              color: "crimson",
              fontSize: "120%",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            {props.history.starRating}-star
          </p> */}
          <p style={{ fontSize: "90%", marginBottom: "10px",color: "#444" }}>
            {props.history.place}
          </p>
          <p
            style={{
              fontSize: "large",
              margin: 0,
              color: "white",
              fontWeight: "550",
              backgroundColor: "#1e90ff",
              padding: "5px 10px",
              borderBottomRightRadius: "7px",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "3px",
              display: "inline-block",
            }}
          >
            {props.history.rating}
          </p>{" "}
          <p
            style={{
              fontSize: "large",
              margin: 0,
              display: "inline",
              color: "black",
              fontWeight: "550",
            }}
          >
            {props.history.badge}
          </p>
          <p style={{ fontSize: "80%" }}>{props.history.reviews} reviews</p>
        </div>
        <p
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            display: "inline",
            color: "white",
            backgroundColor: "inherit",
            fontSize: "x-large",
          }}
          onClick={(e) => deleteCard(e)}
        >
          <i class="fas fa-times-circle"></i>
        </p>
      </div>
    </Link>
  );
}

export default Cardforpast;
