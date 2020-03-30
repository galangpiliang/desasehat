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
              Crowdfunding Platfrom
              <br />
              to help Villagers With <br />
              Health & Medical Needs
            </h1>
            <p>
              The advice is a platform for making campaigns, and distributing
              donations <br />
              peer to peer for villagers who need help and medical
              <br />
              funding from # Generous people from all over Indonesia
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
