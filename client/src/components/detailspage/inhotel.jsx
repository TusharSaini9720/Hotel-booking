import React from "react";
import { NavItem } from "react-bootstrap";

function Inhotel(props) {
  return (
    <div className="inhotel">
      <p
        style={{
          textAlign: "center",
          fontSize: "165%",
          fontWeight: "550",
        }}
      >
        In the hotel
      </p>
      <div className="values">
        {props.array.map((element) => {
          return (
            <>
              <p
                style={{
                  fontSize: "large",
                  fontWeight: "500",
                  margin: "0 0px 0 27px",
                }}
              >
                {element.heading}
              </p>
              <ul style={{ listStyleType: "none" }}>
                {element.listItems.map((item) => {
                  return (
                    <li>
                      <i
                        class="fas fa-check"
                        style={{
                          paddingRight: "10px",
                          fontWeight: "normal",
                          color: "green",
                        }}
                      ></i>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Inhotel;
