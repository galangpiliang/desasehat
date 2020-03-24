import React, { Component } from "react";
import { Row, Col } from "antd";
import desasehat from "../../images/desasehat.jpeg";
import googleplay from "../../images/google play.png";

export class HeroPage extends Component {
  render() {
    return (
      <div className="hero">
        <Row>
          <Col span={12} className="hero__text">
            <h1>
              Crowdfunding Platfrom to help Villagers With Health & Medical
              Needs
            </h1>
            <p>
              Desasehat adalah platfrom untuk membuat kampanye,dan menyalurkan
              donasi secara peer to peer bagi warga desa yang membutuhkan
              bantuan dan pembiayaan medis dari para#Dermawan dari seluruh
              Indonesia
            </p>
            <img src={googleplay} alt="googleplay" className="googleplay" />
          </Col>
          <Col span={12} className="hero__image">
            <img src={desasehat} alt="desasehat" className="desasehat" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeroPage;
