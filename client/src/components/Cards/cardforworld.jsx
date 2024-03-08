import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function Cardforworld(props) {
  return (
    <Link
      style={{ textDecoration: "inherit", color: "inherit" }}
      to={{
        pathname: "/details",
        state: {
          name: props.country,
          guestsnumber: 2,
          startdate: moment().format("YYYY-MM-DD"),
          enddate: moment().add(1, "days").format("YYYY-MM-DD"),

          hotel_id: props.hotel_id,
        },
      }}
    >
      <div className="cardforworld">
        <img src={props.image_url} alt="imagee not available"></img>
        <h5 style={{ fontWeight: "bolder" }}>{props.name}</h5>
        <p>{props.country}</p>
      </div>
    </Link>
  );
}
export default Cardforworld;
