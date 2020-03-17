import React from "react";
import { Button } from "antd";
export default function Pages(props) {
  return (
    <div>
      {console.log(props)}
      <h1>This is Pages page</h1>
      <Button onClick={() => props.history.push("/village")}>To Village</Button>
    </div>
  );
}
