import React from "react";

function Highlights(props) {
  return (
    <div className="hightlights">
      <p
        style={{
          textAlign: "center",
          fontSize: "165%",
          fontWeight: "550",
        }}
      >
        Property Highlights
      </p>
      <div className="values">
        <div className="main">
          <p
            style={{
              fontSize: "large",
              fontWeight: "500",
              margin: "0 0px 0 27px",
            }}
          >
            Main Amenties
          </p>
          <ul>{/* <ul>props.array[0].content.map */}
            {props.array.map((facility) => {
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
                  {facility}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="families">
          <p
            style={{
              fontSize: "large",
              fontWeight: "500",
              margin: "0 0px 0 27px",
            }}
          >
            For Families
          </p>
          <ul>
          {/* props.array[1].content.map */}
            {props.array.map((facility) => {
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
                  {facility}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="families">
          <p
            style={{
              fontSize: "large",
              fontWeight: "500",
              margin: "0",
            }}
          >
            What's around
          </p>
          <ul>
            {props.array.map((facility) => {
              return (
                <li>
                  <i class="fas fa-circle" style={{ fontSize: "xx-small" }}></i>{" "}
                  {facility}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Highlights;
