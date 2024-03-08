import React from 'react'
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";

const Bookingform = (props) => {
   // console.log("id",props);
    const [state, setstate] = React.useState("Book Now");


    const stripePromise = loadStripe(
        "pk_test_51OrD70SJPRmiPsja8R3iXW3hubdabffkpqewHOaldBA9VnWO2NPnULeJ3sJjrPeLdfLoae9Ccx0iCZwQJy6i0Rs200rSWPSWc1"
      );
    
      const url = `http://localhost:3000/api/v1/booking/checkout-session/${props.hotelid}`;
    
      const handleClick = async () => {
        if (!props.signedIn) {
          alert("Login as customer to book a hotel. ");
          return;
        }
        // if (startingDate === undefined || servicesNumber === 0) {
        //   alert("Please choose starting work date and services needed! ");
        //   return;
        // }
        try {
          setstate("Loading...");
          const Session = await axios({
            method: "GET",
            url: url,
            headers: {
                "Authorization":`Bearer ${props.token}`,
                // "Content-Type": "application/json",
              }
            // data: { startingDate, services },
          });
    
          const stripe = await stripePromise;
          stripe.redirectToCheckout({ sessionId: Session.data.session.id });
          setstate("Book Now");
        } catch (err) {
          setstate("Book Now");
          console.log(err);
          alert("Could not complete the payment! Please try again later");
        }
      };


  return (
    <div>
       <button
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
          onClick={handleClick}
        >
          {state}
        </button>  
    </div>
  )
}

export default Bookingform
