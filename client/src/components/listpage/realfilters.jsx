import React from "react";

function Realfilters(props) {
  const [grating, setgrating] = React.useState(1);
 // for checkboxes
 const handleClick = (e) => {
  let newString = "";
  const arrayOfBoxes = Array.from(
    e.target.parentElement.parentElement.children
  );
  arrayOfBoxes.map((el) => {
    if (el.nodeName === "LABEL" && el.children[0].checked === true)
      newString +=
        newString.length === 0
          ? el.children[0].value
          : "," + el.children[0].value;
    return 0;
  });
    console.log("newString",newString)
  const prevObj = { ...props.filters };
  if (newString.length === 0) delete prevObj[e.target.name];
  else prevObj[e.target.name] = newString;
     console.log("prevObj",prevObj);
  props.setfilters(prevObj);
};
  const clickforguestsrating = (e) => {
    const prevObj = { ...props.filters };
  prevObj[e.target.name] = e.target.value;
  props.setfilters(prevObj);
  };
  
  return (
    <div className="realfilters">
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Star Rating
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="StarRating"
            value="1"
            onClick={handleClick}
          />
          1-star
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="StarRating"
            value="2"
            onClick={handleClick}
          />
          2-stars
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="StarRating"
            value="3"
            onClick={handleClick}
          />
          3-stars
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="StarRating"
            value="4"
            onClick={handleClick}
          />
          4-stars
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="StarRating"
            value="5"
            onClick={handleClick}
          />
          5-stars
        </label>

        <br />
      </div>
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Guests Rating:({grating}-5)
      </p>
      <br />
      <div className="range">
        <input
          type="range"
          min="1"
          max="5"
          name="ratingAverage[gte]"
          step="0.5"
          value={grating}
          onChange={clickforguestsrating}
          onInput={(e) => {
            setgrating(e.target.value);
          }}
        />
      </div>
    
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Facilities
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Free Wifi"
            onClick={handleClick}
          />
          Free Wifi
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Non-Smoking"
            onClick={handleClick}
          />
          Non-Smoking
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Free Breakfast"
            onClick={handleClick}
          />
          Free Breakfast
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Free parking"
            onClick={handleClick}
          />
          Free parking
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Pet Friendly"
            onClick={handleClick}
          />
          Pet Friendly
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Bathtub in room"
            onClick={handleClick}
          />
          Bathtub in room
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Bar"
            onClick={handleClick}
          />
          Bar
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Gym"
            onClick={handleClick}
          />
          Gym
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Casino"
            onClick={handleClick}
          />
          Casino
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Spa"
            onClick={handleClick}
          />
          Spa
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Restaurant"
            onClick={handleClick}
          />
          Restaurant
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Pool"
            onClick={handleClick}
          />
          Pool
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Childcare"
            onClick={handleClick}
          />
          Childcare
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Connecting rooms"
            onClick={handleClick}
          />
          Connecting rooms
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="facility"
            value="Cribs"
            onClick={handleClick}
          />
          Cribs
        </label>

        <br />
      </div>
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Theme
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Luxury"
            onClick={handleClick}
          />
          Luxury
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Romantic"
            onClick={handleClick}
          />
          Romantic
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Family-friendly"
            onClick={handleClick}
          />
          Family-friendly
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Business"
            onClick={handleClick}
          />
          Business
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Adventure"
            onClick={handleClick}
          />
          Adventure
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Spa Hotel"
            onClick={handleClick}
          />
          Spa Hotel
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="Theme"
            value="Beach"
            onClick={handleClick}
          />
          Beach
        </label>
        <br />

        <br />
      </div>
    </div>
  );
}

export default Realfilters;
