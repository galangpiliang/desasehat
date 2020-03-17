import React from "react";
import { Button } from "antd";

export default function Village(props) {
  return (
    <div>
      {console.log(props)}
      <h1>This is Village page</h1>
      <Button onClick={() => props.history.push("/")}>To Dashboard</Button>
    </div>
  );
}
