import React from "react";

function Sortby(props) {
  const [activeclass, setactiveclass] = React.useState("sort2");


  const handleClick = (e, value) => {
    const prevObj = { ...props.filters };
    prevObj.sort= value;
    props.setfilters(prevObj);
    setactiveclass("sort3");
  };
  const handleClick1 = (value) => {
    const prevObj = { ...props.filters };
    prevObj.sort= value;
    props.setfilters(prevObj);
    setactiveclass("sort2");
  };
  const handleClick2 = (value) => {
    const prevObj = { ...props.filters };
    prevObj.sort= value;
    props.setfilters(prevObj);
    setactiveclass("sort4");
  };
  return (
    <div className="sortby" style={{ marginTop: "20px" }}>
      <p
        style={{
          fontSize: "normal",
          fontWeight: "bold",
          color: "black",
          display: "inline-block",
          margin: 0,
          marginRight: "10px",
        }}
      >
        Sort By
      </p>
      {/* <div className="sorts" style={{ display: "inline" }}>
        <button
          className={activeclass === "sort1" ? activeclass : "sort"}
          onClick={bestseller}
          value="BEST_SELLER"
        >
          Best Seller
        </button> */}
        <select
          name="starrating"
          className={activeclass === "sort2" ? activeclass : "sort"}
          onChange={(e) => handleClick1(e.target.value)}
        >
          <option value="bosee" style={{ display: "none" }}>
            Star Rating
          </option>
          <option value="-StarRating" >Stars(high to low)</option>
          <option value="StarRating" >Stars(low to high)</option>
        </select>
        <button
          className={activeclass === "sort3" ? activeclass : "sort"}
          onClick={(e) => handleClick(e, "ratingAverage")}
          
        >
          Guest Rating
        </button>
        <select
          name="price"
          className={activeclass === "sort4" ? activeclass : "sort"}
          onClick={(e) => handleClick2(e.target.value)}
        >
          <option value="voss" style={{ display: "none" }}>
            Price
          </option>
          <option value="-price">Price(high to low)</option>
          <option value="price">Price(low to high)</option>
        </select>
      </div>
  
  );
}

export default Sortby;
