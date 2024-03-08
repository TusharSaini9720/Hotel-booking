import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import reactCookie from "react-cookie";

function Signin(props) {
  const [error, seterror] = React.useState("");
  const history = useHistory();
  const url = "/api/v1/users/login/";
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
          props.sethistory(res.data.data.user.history);
          props.settoken(res.data.token);
         
          props.setsignedIn(true);
          props.setuser(res.data.data.user);
          history.push("/");
        } else {
          let errormessage = res.data.message;
          seterror("*" + errormessage);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="register">
      <form>
        <h2>Sign-In</h2>

        <fieldset>
          <p style={{ color: "crimson" }}>{error}</p>
          <label for="email">Email</label>
          <input
            onChange={(e) => handle(e)}
            value={data.name}
            type="email"
            id="email"
            name="email"
          />

          <label for="password">Password</label>
          <input
            onChange={(e) => handle(e)}
            value={data.name}
            type="password"
            id="password"
            name="password"
          />
          <p>
            <Link to="/forgotPassword">Forgot your password?</Link>
          </p>
        </fieldset>

        <button type="submit" onClick={(e) => sendData(e)}>
          Sign-In
        </button>

        <hr />
        <p>
          Don't have an account?<Link to="/register"> Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
