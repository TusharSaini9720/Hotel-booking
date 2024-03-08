import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
function Cardforpopular(props) {
  const data=props;

  return (
    <Link
      to={{
        pathname: "/search",
        state: {
          cityname: data.props.city,
          startdate: moment().format("yyyy-MM-DD"),
          enddate: moment().add(1, "days").format("yyyy-MM-DD"),
          guestsnumber: 2,
        },
      }}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="popularcard">
        <img src={data.props.image[0]} alt="not available" />
        <p style={{ fontWeight: "bolder" }}>{data.props.city}</p>
      </div>
    </Link>
  );
}
export default Cardforpopular;
