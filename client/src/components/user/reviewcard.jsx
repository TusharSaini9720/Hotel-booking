import React from 'react'
import StarRatings from "react-star-ratings";
const Reviewcard = (props) => {
  return (
    
    <div className="reviewcard">
        <div className="reviewimage">
          <img src={props.review.hotel.image[0]} alt="imagee not available"></img>
        </div>
        <div className="centerdata">
        <span style={{ textTransform: "capitalize" }}>
        <p
            style={{
              fontSize: "x-large",
              display: "inline",
              fontWeight: "600",
              lineHeight: "78%",
            }}
          >
            {props.review.hotel.name}
          </p>
            <p
              style={{
                display: "inline",
                float: "right",
                margin: 0,
                fontSize: "small",
              }}
            >
              {new Date(props.review.createdAt).toLocaleDateString()}
            </p>
          </span>
          <br/>
          <div style={{textAlign:"center",justifyContent:"center"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
  <div className="star-rating" style={{ marginLeft: "5px",alignItems: "center" }}>
  <StarRatings
            rating={props.review.rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="4px"
          />
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
    {props.review.rating}-star
  </span>
</div>
<div style={{ display: "flex", alignItems: "center" }}>
  <div className="star-rating" style={{ marginLeft: "5px",alignItems: "center" }}>
  <StarRatings
            rating={props.review.CleanlinessRating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="4px"
          />
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
    Cleanliness
  </span>
</div>
<div style={{ display: "flex", alignItems: "center" }}>
  <div className="star-rating" style={{ marginLeft: "5px",alignItems: "center" }}>
  <StarRatings
            rating={props.review.HotelConditionRating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="4px"
          />
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
   HotelCondition
  </span>
</div>
<div style={{ display: "flex", alignItems: "center" }}>
  <div className="star-rating" style={{ marginLeft: "5px",alignItems: "center" }}>
  <StarRatings
            rating={props.review.HotelServiceRating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="4px"
          />
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
       HotelService
  </span>
</div>
<div style={{ display: "flex", alignItems: "center" }}>
  <div className="star-rating" style={{ marginLeft: "5px",alignItems: "center" }}>
  <StarRatings
     style={{fontSize:"x-large"}}
            rating={props.review.RoomComfortRating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="30px"
            starSpacing="4px"
          />
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
    RoomComfort
  </span>
</div>
</div>
</div>
</div>

  )
}

export default Reviewcard
