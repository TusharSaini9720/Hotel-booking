import React from "react";
import parse from "html-react-parser";
import Bookingform from './bookingform'
import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function Header(props) {
  //console.log("props", props);
  return (
    <div className="header">
      <div>
        <p
          style={{
            fontSize: "215%",
            display: "inline",
            fontWeight: "600",
            lineHeight: "78%",
          }}
        >
          {props.name}
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
  
  <div className="star-rating" style={{ marginLeft: "0px", alignItems:"center"}}>
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        index <= props.starrating ? (
          <FaStar style={{ color: "#FFD43B", fontSize: "x-large" }}/>
        ) : (
          <FaRegStar style={{ color: "#FFD43B", fontSize: "x-large" }}/>
        )
      );
    })}
  </div>
  <span
    style={{
      fontSize: "x-large",
      fontWeight: "bold",
      display: "inline",
      color: "crimson",
      marginLeft: "5px",
    }}
  >
    {props.starrating}-star
  </span>
</div>
        <p
          style={{
            fontSize: "normal",
            margin: 0,
            marginTop: "-2px",
            marginBottom: "5px",
          }}
        >
          {props.address}
        </p>
        {/* <div>ftcyvgbhujn</div> */}
       
        {/* {props.free.map((free) => {
          return (
            <p
              style={{
                margin: " 0 5px 0 0",
                display: "inline",
                borderRadius: "15px",
                backgroundColor: "forestgreen",
                color: "white",
                padding: "3px 10px",
              }}
            >
              <i
                class="fas fa-check"
                style={{
                  paddingRight: "5px",
                  fontWeight: "normal",
                }}
              ></i>
              {free}
            </p>
          );
        })} */}
      </div>
      <div className="rightdata">
        <p
          style={{
            fontSize: "180%",
            margin: 0,
            textAlign: "right",
            fontWeight: "bold",
            color: "crimson",
            alignItems:"center"
          }}
        >
         <FaDollarSign style={{marginRight:"2px"}}/>{props.price}/-
        </p>
        <p
          style={{
            fontSize: "small",
            margin: "0",
            marginTop: "-8px",
            textAlign: "right",
          }}
        >
          per room per night
        </p>
        <p
          style={{
            fontSize: "88%",
            margin: 0,
            color: "black",
            fontWeight: "bold",
            textAlign: "right",
            alignItems:"center",
          }}
        >
          {/* {props.totalPrice
            // ? props.totalPrice.includes("nights") ||
            //   props.totalPrice.includes("guests")
            //   ? props.totalPrice
            //       .replace("total", "")
            //       .replaceAll("&nbsp;", " ")
            //       .replace("1 room,", "")
            //   : undefined
            // : undefined}
          } */}
           <FaDollarSign style={{marginRight:"2px"}}/>{props.totalPrice}/-
        </p>
        <p
          style={{
            fontSize: "small",
            margin: 0,
            marginTop: "-5px",
            textAlign: "right",
          }}
        >
          exclusive of taxes & fees
        </p>

       {/* <button
          style={{
            backgroundColor: "dodgerblue",
            color: "white",
            fontWeight: "bold",
            fontSize: "large",
            marginTop: "10px",
            padding: "5px 30px",
            float: "right",
            border: "none",
            borderRadius: "30px",
          }}
        >
          Room Details
        </button>  */}
        <Bookingform hotelid={props.id} signedIn={props.signedIn} token={props.token}/>
      </div>
    </div>
  );
}
export default Header;
