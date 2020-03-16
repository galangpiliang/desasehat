import React from "react";
import { withRouter } from "react-router-dom";

function Users(props) {
  return (
    <div>
      {console.log(props)}
      <h1>This is Users page</h1>
    </div>
  );
}

export default withRouter(Users);
