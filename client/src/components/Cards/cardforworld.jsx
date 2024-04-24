import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function Cardforworld(props) {
  return (
    <Link
      style={{ textDecoration: "inherit", color: "inherit" }}
      to={{
        pathname: "/search",
        state: {
          cityname: 'India',
          startdate: moment().format("yyyy-MM-DD"),
          enddate: moment().add(1, "days").format("yyyy-MM-DD"),
          guestsnumber: 2,
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
