import React from "react";
import Pastsearch from "../homepage/pastsearch";
import Popular from "../homepage/popular";
import World from "../homepage/world";

function Content(props) {
  return (
    <div class="content">
      <Pastsearch
        signedIn={props.signedIn}
        history={props.history}
        token={props.token}
        sethistory={props.sethistory}
      />
      <hr style={{ width: "100%" }} />
      <Popular />
      <hr style={{ width: "100%" }} />
      {/* <World />
      <hr style={{ width: "100%" }} /> */}
    </div>
  );
}

export default Content;
