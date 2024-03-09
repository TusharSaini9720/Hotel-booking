import React, { useEffect, useState } from "react";
import Cardforpopular from "../Cards/cardforpopular";
import popular from "../../images";
import axios from "axios";

function Popular() {
  const [hotel,sethotel]=useState([]);
  const url='/api/v1/hotels';
  useEffect(()=>{
    axios({method:'GET', url:url,params: {
      country: 'India'
    }})
    .then((res)=>{
      //console.log("res.data.data.Hotels",res.data.data.Hotels);
      sethotel(res.data.data.Hotels);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <h3>Popular in India</h3>
      <div className="popular">{hotel.map(createcard)}</div>
    </>
  );
}
//key={data._id} name={data.city} url={data.image[0]}
function createcard(data) {
  return <Cardforpopular  props= {data}/>;
}
export default Popular;
