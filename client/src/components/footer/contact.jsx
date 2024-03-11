import React from "react";
import axios from "axios";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [error, seterror] = React.useState("");
  const url = "/api/v1/users/sendEmail/";
  const header = {
    "Content-Type": "application/json",
  };
  const [data, setdata] = React.useState({});

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setdata(newData);
  };
  const sendData = (e) => {
    e.preventDefault();
    axios({ method: "POST", url: url, data: data, headers: header })
      .then((res) => {
        if (res.data.status === "success") {
          let errormessage = res.data.message;
          seterror(errormessage);
        } else {
          let errormessage = res.data.message;
          seterror("* " + errormessage);
        }
      })
      .catch((err) => {
        console.log(err);
        return seterror("* Message could not be send");
      });
  };
  return (
    <div className="contact">
      <p
        style={{
          fontWeight: "550",
          fontSize: "x-large",

          gridColumnStart: "1",
          gridColumnEnd: "3",
        }}
      >
        Contact Me
      </p>
      <div className="personalData">
        <p>
        <FaRegAddressCard style={{ color: "white", fontSize: "large" }}/>&nbsp;&nbsp;Kachchi Garhi,Shamli,
          UttarPradesh, India
        </p>
        <p style={{ fontStyle: "italic" }}>
        <MdEmail style={{ color: "white", fontSize: "large" }}/>&nbsp;&nbsp;itsaini9720@gmail.com
        </p>
        <p>
        <FaPhoneAlt style={{ color: "white", fontSize: "large" }}/>&nbsp;&nbsp;9720556084
        </p>
      </div>
      <div className="contactform">
        <form onSubmit={(e) => sendData(e)}>
          <fieldset>
            <label for="name">Name</label>
            <input
              onChange={(e) => handle(e)}
              value={data.name}
              type="text"
              id="name"
              name="name"
              placeholder="enter your name..."
            />
            <label for="email">Email</label>
            <input
              onChange={(e) => handle(e)}
              value={data.email}
              type="text"
              id="email"
              name="email"
              placeholder="enter your email id..."
            />
            <label for="confirmNewPassword">Message</label>
            <textarea
              onChange={(e) => handle(e)}
              value={data.message}
              id="message"
              name="message"
              placeholder="enter your message here..."
              style={{ margin: "0" }}
            />
          </fieldset>
          <p style={{ color: "white", margin: "0" }}>{error}</p>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
