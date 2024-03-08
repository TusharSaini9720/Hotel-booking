import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function UpdatePassword(props) {
  const [error, seterror] = React.useState("");
  const history = useHistory();
  const url = "/api/v1/users/updatePassword/";
  const header = {
    "Authorization": `Bearer ${props.token}`,
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
    axios({ method: "PATCH", url: url, data: data, headers: header })
      .then((res) => {
        if (res.data.status === "success") {
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
      <form onSubmit={(e) => sendData(e)}>
        <h2>Update Password</h2>

        <fieldset>
          <p style={{ color: "crimson" }}>{error}</p>
          <label for="password">Password</label>
          <input
            onChange={(e) => handle(e)}
            value={data.name}
            type="password"
            id="password"
            name="password"
          />
          <label for="newPassword">New password</label>
          <input
            onChange={(e) => handle(e)}
            value={data.name}
            type="password"
            id="newPassword"
            name="newPassword"
          />
          <label for="confirmNewPassword">Confirm New Password</label>
          <input
            onChange={(e) => handle(e)}
            value={data.name}
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
          />
        </fieldset>
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default UpdatePassword;
