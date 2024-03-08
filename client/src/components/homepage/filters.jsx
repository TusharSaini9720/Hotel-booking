import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

function Filters() {
  //states
  const [city, setcity] = React.useState(null);
  const [guests, setguests] = React.useState(2);
  const [dateRange, setdateRange] = React.useState({
    startdate: moment().format("YYYY-MM-DD"),
    enddate: moment().add(1, "days").format("YYYY-MM-DD"),
  });
  const [focus, setFocus] = React.useState(null);

  const { startDate, endDate } = dateRange;

  //functions
  function handlefocus(event) {
    event.target.parentElement.style.borderColor = "dodgerblue";
    event.target.parentElement.style.borderWidth = "2px";
  }
  function handleblur(event) {
    event.target.parentElement.style.borderColor = "gray";
    event.target.parentElement.style.borderWidth = "1px";
  }
  const handleclickforsearch = (e) => {
    if (city === null || city.trim() === "") {
      e.preventDefault();
      alert("Enter city name to search");
    }
  };
  const handleclickfornumber = (e) => {
    if (parseInt(e.target.value) > 7 || parseInt(e.target.value) < 1)
      alert("Number of guests should be between 1 and 7");
    else setguests(parseInt(e.target.value));
  };

  return (
    <div className="filters">
      <h2 style={{ textAlign: "center", color: "white" }}>Where To Go?</h2>
      <form>
        <div className="form">
          <div className="name">
            <i class="fas fa-search searchicon"></i>
            <input
              type="text"
              onFocus={handlefocus}
              onBlur={handleblur}
              placeholder="search for location"
              onChange={(e) => setcity(e.target.value)}
            ></input>
          </div>
          <div className="name2">
            <i class="far fa-calendar-alt searchicon"></i>

            <DateRangePicker
              startDatePlaceholderText="Check-in"
              endDatePlaceholderText="Check-out"
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
            <i
              class="fas fa-users searchicon"
              style={{ marginRight: "5px" }}
            ></i>
            <input
              type="text"
              onFocus={handlefocus}
              onBlur={handleblur}
              placeholder="Number of Guests"
              onChange={handleclickfornumber}
            ></input>
          </div>
          <div>
            <Link
              to={{
                pathname: "/search",
                state: {
                  cityname: city,
                  startdate: moment(startDate).format("YYYY-MM-DD"),
                  enddate:
                    endDate === startDate
                      ? moment().add(1, "days").format("YYYY-MM-DD")
                      : moment(endDate).format("yyyy-MM-DD"),
                  guestsnumber: guests === undefined ? 2 : guests,
                },
              }}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button
                type="submit"
                onClick={handleclickforsearch}
                className="search"
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
