import React from "react";
import HeaderLandingPage from "./HeaderLandingPage";
import SectionLandingPage from "./SectionLandingPage";

export default function Landing(props) {
  return (
    <div>
      <HeaderLandingPage {...props} />
      <SectionLandingPage {...props} />
    </div>
  );
}
