import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

function Filtersforlist(props) {
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

  return (
    <div className="filtersforlist">
      <h2 style={{ textAlign: "center", color: "white" }}>Where and When?</h2>
      <div className="formforlist">
        <div className="name">
          <i class="fas fa-search searchicon"></i>
          <input
            type="text"
            onFocus={handlefocus}
            onBlur={handleblur}
            placeholder={props.name}
            onChange={(e) => setcity(e.target.value)}
          ></input>
        </div>
        <div className="name2">
          <i class="far fa-calendar-alt searchicon"></i>

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
        <div className="name">
          <i class="fas fa-users searchicon" style={{ marginRight: "5px" }}></i>
          <input
            type="text"
            onFocus={handlefocus}
            onBlur={handleblur}
            placeholder={props.guestsnumber}
            onChange={handleclickfornumber}
          ></input>
        </div>
        <div>
          <Link
            to={{
              pathname: "/search",
              state: {
                cityname: city.trim() === "" ? props.name : city,
                startdate: moment(dateRange.startdate).format("YYYY-MM-DD"),
                enddate: moment(dateRange.enddate).format("YYYY-MM-DD"),
                guestsnumber: isNaN(guests) ? props.guestsnumber : guests,
              },
            }}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="search">
              <p>Search</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Filtersforlist;
