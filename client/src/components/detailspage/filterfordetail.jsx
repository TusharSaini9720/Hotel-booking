import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { FaSearch } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Bookingform from './bookingform'

function Filtersfordetail(props) {
  //states
  const [city, setcity] = React.useState(props.name);
  const [guests, setguests] = React.useState(props.guestsnumber);
  const [dateRange, setdateRange] = React.useState({
    startdate: props.startdate,
    enddate: props.enddate,
  });
  const [focus, setFocus] = React.useState(null);
  var { startDate, endDate } = dateRange;

  //functions
  function handlefocus(event) {
    event.target.parentElement.style.borderColor = "dodgerblue";
    event.target.parentElement.style.borderWidth = "2px";
  }
  function handleblur(event) {
    event.target.parentElement.style.borderColor = "gray";
    event.target.parentElement.style.borderWidth = "1px";
  }

  const handleclickfornumber = (e) => {
    if (parseInt(e.target.value) > 7 || parseInt(e.target.value) < 1)
      alert("Number of guests should be between 1 and 7");
    else setguests(parseInt(e.target.value));
  };
 
  const calculateDays = () => {
    if (startDate && endDate) {
        // const start = moment(startDate);
        // const end = moment(endDate);
        // console.log("endDate.diff(startDate, 'days') + 1;",endDate.diff(startDate, 'days') + 1);
        // daysDifference = endDate.diff(startDate, 'days') + 1;// Add 1 to include both start and end dates
      props.setnoofdays(endDate.diff(startDate, 'days') + 1);
    }
  };
  React.useEffect(() => {
    calculateDays();
  }, [startDate,endDate]);
//   console.log("daysDifference",props.noofdays)
  return (
    <div className="filtersforlist">
      <h2 style={{ textAlign: "center", color: "white" }}>Book Now!</h2>
      <div className="formforlist">
        <div className="name2" style={{alignItems:"center"}}>
        <FaRegCalendarAlt style={{ color: "blue", fontSize: "large" }}/>
          <DateRangePicker
            startDatePlaceholderText={moment(props.startdate).format(
              "MM/DD/YYYY"
            )}
            endDatePlaceholderText={moment(props.enddate).format("MM/DD/YYYY")}
            startDate={startDate}
            endDate={endDate}
            numberOfMonths={1}
            onDatesChange={({ startDate, endDate }) =>
              setdateRange({ startDate, endDate })
            } // PropTypes.func.isRequired
            focusedInput={focus}
            onFocusChange={(focus) => setFocus(focus)}
            startDateId="startDateMookh"
            endDateId="endDateMookh"
            minimumNights={1}
          />
        </div>
        <div className="name" style={{alignItems:"center"}}>
        <IoIosPeople style={{ color: "blue", fontSize: "x-large" }}/>
          <input
            type="text"
            onFocus={handlefocus}
            onBlur={handleblur}
            placeholder={props.guestsnumber}
            onChange={handleclickfornumber}
          ></input>
        </div><div className="name1" style={{ backgroundColor:"white", borderRadius:"10px 10px" ,border: "solid 1px",
  borderColor: "gray"}}>
        <div  style={{ textAlign: "right", paddingRight: "7px", fontFamily: "Arial, sans-serif", color: "#333", backgroundColor:"white" }}>
  <p>
    <strong>Price for {props.noofdays} nights:</strong> <span style={{ color: "#007bff" ,fontSize:"large",fontWeight:"bolder"}} >${props.price * props.noofdays}/-</span>
    <br />
    <strong>Taxis price:</strong> <span style={{ color: "#28a745" ,fontSize:"large",fontWeight:"bolder"}}>${props.totalPrice * props.noofdays - props.price * props.noofdays}/-</span>
    <br />
    <strong>Total price:</strong> <span style={{ textAlign: "bottom",color: "#dc3545" ,fontSize:"140%",fontWeight:"bolder"}}>${props.totalPrice * props.noofdays}/-</span>
  </p>
</div></div>
        <div style={{alignItems:"center"}}>
        <Bookingform 
        hotelid={props.id} 
        signedIn={props.signedIn} 
        token={props.token} 
        noofdays={props.noofdays}
        startdate={startDate}
        enddate={endDate}/>
        </div>
      </div>
    </div>
  );
}

export default Filtersfordetail;
