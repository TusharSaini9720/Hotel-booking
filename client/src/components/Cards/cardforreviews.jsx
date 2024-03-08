import React from "react";

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

  <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.review.rating ? (
          <span className="fa-solid fa-star" style={{ color: "#FFD43B", fontSize: "large" }}></span>
        ) : (
          <span className="fa-regular fa-star" style={{ color: "#FFD43B", fontSize: "large" }}></span>
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
