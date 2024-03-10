import React from "react";
import Cardforworld from "../Cards/cardforworld";
import { world } from "../../images";

function World() {
  const [more, setmore] = React.useState(6);
  const [btn, setbtn] = React.useState("More");
  function CreateCard(data) {
    if (parseInt(data.id) <= more) {
      return (
        <Cardforworld
          id={data.id}
          image_url={`../../images/world/${data.image_url}`}
          name={data.name}
          hotel_id={data.hotel_id}
          country={data.country}
        />
      );
    }  
  }
  function handleClick() {
    if (btn === "More") {
      setbtn("Less");
      setmore(12);
    } else {
      setbtn("More");
      setmore(6);
    }
  }
  return (
    <>
      <h3>Explore the World</h3>
      <p>Check out some of our favourite unique stays</p>
      <div className="world1">{world.map(CreateCard)}</div>
      <button className="seemorebtn" onClick={handleClick}>
        See {btn}
      </button>
    </>
  );
}

export default World;
