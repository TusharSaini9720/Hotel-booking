import React from "react";
import { Nav } from "react-bootstrap";
import ToggleDisplay from "react-toggle-display";
import axios from "axios";

import { Link } from "react-router-dom";

function MyProfile(props) {
  const [click, setclick] = React.useState(false);
  const handleOver = (e) => {
    setclick(true);
  };
  const handleLeave = (e) => {
    setclick(false);
  };
  const deleteAccount = () => {
    if (window.confirm("Are you sure to delete your account?")) {
      const url = "/api/v1/users/deleteMe/";
      const header = {
        "Content-Type": "application/json",
      };
      axios({ method: "DELETE", url: url, headers: header })
        .then((res) => {
          if (res.status === 204) {
            props.sethistory([]);
            props.setsignedIn(false);
            props.setuser({});
          }
        })
        .catch((err) => console.log(err));
    }
  };
  if (props.user.name === undefined) return <></>;
  return (
    <Nav.Link>
      <div
        class="dropdown"
        onMouseOver={(e) => {
          handleOver(e);
        }}
        onMouseLeave={(e) => {
          handleLeave(e);
        }}
      >
        <span style={{ padding: "10px 5px" }}>
          My Profile{"  "}
          {click ? (
            <i class="fas fa-caret-up"></i>
          ) : (
            <i class="fas fa-caret-down"></i>
          )}
        </span>
        <ToggleDisplay show={click}>
          <div class="dropdown-content">
            <p
              style={{
                disply: "inline",
                borderRadius: "50%",
                fontSize: "xx-large",
                backgroundColor: "purple",
                padding: "10px 25px",
              }}
            >
              {props.user.name.charAt(0).toUpperCase()}
            </p>
            <p
              style={{
                fontWeight: "550",
                display: "inline",
                fontSize: "x-large",
                margin: "0",
              }}
            >
              {props.user.name}
            </p>
            <p style={{ display: "inline", fontSize: "larger" }}>
              {props.user.email}
            </p>
            <Link
              to="/updatePassword"
              style={{
                textDecoration: "none",
                width: "100%",
                fontSize: "larger",
                textAlign: "center",
                fontWeight: "500",
                backgroundColor: "whitesmoke",
                color: "darkorange",
                padding: "5px 0",
                borderRadius: "5px",
                borderBottom: "solid darkorange 4px",
                margin: 0,
              }}
            >
              <p
                style={{
                  margin: 0,
                }}
              >
                Update Password
              </p>
            </Link>
            <p
              style={{
                width: "100%",
                fontSize: "larger",
                textAlign: "center",
                fontWeight: "500",
                backgroundColor: "whitesmoke",
                color: "darkorange",
                padding: "5px 0",
                borderRadius: "5px",
                borderTop: "solid darkorange 4px",
                margin: 0,
              }}
              onClick={() => {
                deleteAccount();
              }}
            >
              Delete Account
            </p>
          </div>
        </ToggleDisplay>
      </div>
    </Nav.Link>
  );
}
export default MyProfile;
