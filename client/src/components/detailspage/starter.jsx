import React from "react";
import Filtersfordetail from "./filterfordetail";

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
        <Filtersfordetail
          price={props.price}
          totalPrice={props.totalPrice}
          id={props.id}
          name={props.city}
          signedIn={props.signedIn} 
          token={props.token} 
          startdate={props.startdate}
          enddate={props.enddate}
          guestsnumber={props.guestsnumber}
          setnoofdays={props.setnoofdays}
          noofdays={props.noofdays}
        />
      </div>

      <div
  className="imageSliderForDetailsPage"
  style={{
    margin: width > 768 ? "4px 0px" : "20px 0px",
    padding: "10px",
    paddingLeft:"25px",
   
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
              width: "98%",
             
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
