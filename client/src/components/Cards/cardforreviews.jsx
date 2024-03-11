import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function Cardforreviews(props) {
   
  return (
    <div className="cardforreviews">
     
     <div className="writer" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline"  }}>
  <p
    style={{
      fontSize: "x-large",
      fontWeight: "600",
    }}
  >
    {props.review.user.name}
  </p>

  <div className="star-rating" style={{alignItems:"center"}}>
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.review.rating ? (
          <FaStar style={{ color: "#FFD43B", fontSize: "x-large" }}/>
        ) : (
          <FaRegStar style={{ color: "#FFD43B", fontSize: "x-large" }}/>
        )
      );
    })}
    <p style={{ display: "inline", marginLeft: "5px", fontSize: "large" }}>
      {props.review.rating}
    </p>
  </div>
</div>


      <div className="write">
         <p style={{ margin: "0", fontSize: "large", fontWeight: "500" }}>
          {props.review.review}{" "}
        </p> 
      </div>
    </div>
  );
}
export default Cardforreviews;
