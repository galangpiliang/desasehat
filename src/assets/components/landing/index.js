import React from "react";
// import { Layout } from "antd";
import HeaderNav from "./HeaderNav";
import HeroPage from "./HeroPage";
import FeaturePage from "./FeaturePage";
import DownloadPage from "./DownloadPage";
import SubscribePage from "./SubscribePage";
import FooterPage from "./FooterPage";
import "../../style/LandingPage.less";

export default function Landing(props) {
  return (
    <div className="landing-page">
      <HeaderNav />
      <HeroPage />
      <FeaturePage />
      <DownloadPage />
      <SubscribePage />
      <FooterPage />
    </div>
  );
}
