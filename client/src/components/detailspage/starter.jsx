import React from "react";
import Filtersforlist from "../listpage/filtersforlist";

import Slider from "react-slick";

function Starter(props) {
  const { innerWidth: width, innerHeight: height } = window;
  var settings = {
    infinite: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 // console.log(props);
  var images = [];
  props.photos.map((array) => {
    images = [...images, array];
    return null;
  });
 // console.log("images",images);

  return (
    <div className="starter">
      <div className="left">
        <Filtersforlist
          name={props.city}
          startdate={props.startdate}
          enddate={props.enddate}
          guestsnumber={props.guestsnumber}
        />
      </div>

      <div
  className="imageSliderForDetailsPage"
  style={{
    margin: width > 768 ? "4px 0px" : "20px 0px",
    padding: "10px",
    borderRadius: "30px",
    overflow: "hidden",
    position: "relative",
    
  }}
>
  <Slider {...settings}>
    {images.map((url, index) => {
      return (
        <div key={index} style={{ padding: "0 5px" }}>
          <img
            src={url}
            alt="Not available"
            style={{
              height: width > 768 ? "400px" : "320px",
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </div>
      );
    })}
  </Slider>
</div>
    </div>
  );
}
export default Starter;
