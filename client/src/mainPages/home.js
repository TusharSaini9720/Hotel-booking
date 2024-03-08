import React from "react";
import Footer from "../components/footer/footer";
import Carousel from "../components/homepage/carousel";
import Content from "../components/homepage/content";

function Home(props) {
  return (
    <div className="home">
      <Carousel />
      <Content
        signedIn={props.signedIn}
        history={props.history}
        token={props.token}
        sethistory={props.sethistory}
      />
      <Footer />
    </div>
  );
}

export default Home;
