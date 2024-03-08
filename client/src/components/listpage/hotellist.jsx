import React from "react";
import Cardforhotellist from "../Cards/cardforhotellist";
import axios from "axios";
import Sortby from "./sortby";
import Loader from "react-loader-spinner";
import NotFound from "../notfound/notfound";

function Hotellist(props) {
  //console.log(props);
  //state for sorting
 // const [sortby, setsortby] = React.useState("BEST_SELLER");
  const query = props.cityname;
  //const sortby = props.sortby;
  const guestsnumber = props.guestsnumber;
  const startdate = props.startdate;
  const enddate = props.enddate;
  const filters=props.filters;
  const [destinationId, setdestinationId] = React.useState("");
  const [hotelslist, sethotelslist] = React.useState(["load"]);
  const [placename, setplacename] = React.useState("");
  console.log("props.filters",props.filters);
const url='http://localhost:3000/api/v1/hotels?country=India';
  // React.useEffect(() => {
  //   fetchid();
  // }, [query]);
  React.useEffect(() => {
    axios({method:'GET',url:url, params: props.filters})
    .then((res)=>{
      console.log("res.data.data.Hotels",res.data.data.Hotels)
      sethotelslist(res.data.data.Hotels);
    }).catch((err)=>{
      sethotelslist(["notfound"]);
      console.log(err);
    })
  }, [
    destinationId,
    guestsnumber,
    startdate,
    enddate,
    filters
  ]);
 

  if (hotelslist[0] === "load") {
    return (
      <div className="loaderforlist">
        <Loader type="Bars" color="#0d6efd" height={100} width={100} />
      </div>
    );
  }
  if (hotelslist.length === 0 || hotelslist[0] === "notfound" || hotelslist === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <h1>{hotelslist[0].name}</h1>
      <Sortby  filters={props.filters}
              setfilters={props.setfilters}  />
      <p className="onlydesktop">
        * Filters are available only for desktop site.
      </p>
      <hr />
      <div className="hotellist">
        {hotelslist.map((hotelslist) =>
          Createcardforhotellist(
            hotelslist,
            guestsnumber,
            startdate,
            enddate,
            query,
            props.signedIn
          )
        )}
      </div>
    </>
  );
}
function Createcardforhotellist(
  hotelslist,
  guestsnumber,
  startdate,
  enddate,
  query,
  signedIn
) {
  if (hotelslist.length < 2 || hotelslist.ratingAverage === 0.0) {
    return;
  }
  var guestsrating;
  var remark;
  var number;
  if (hotelslist.ratingsQuantity === undefined) {
    guestsrating = 0.0;
    remark = "NA";
    number = 0;
  } else {
    guestsrating = hotelslist.ratingAverage;
    //remark = hotelslist.guestReviews.badgeText;
    number = hotelslist.ratingsQuantity;
  }
  return (
    <>
      <Cardforhotellist
        image={
          hotelslist.image[0]
        }
        name={hotelslist.name}
        starRating={hotelslist.StarRating}
       
        address={hotelslist.address}
       
        region={hotelslist.city}
       
        price={hotelslist.price}
        totalPrice={hotelslist.totalPrice}
        rating={guestsrating}
        gnumber={guestsnumber}
        startdate={startdate}
        enddate={enddate}
        numberofreviews={number}
        remark="good"
        hotelid={hotelslist._id}
        cancellation={"Free Cancellation"}
        payment={"No pre payment needed"}
        cc={"No CC required"}
        city={query}
      />
    </>
  );
}
export default Hotellist;
