import React, { Component } from "react";
import { Row, Col } from "antd";
import mainpage from "../../images/mainPage.png";

export class DownloadPage extends Component {
  render() {
    return (
      <div className="download" id="dl">
        <div className="download__title">
          <h2>Desasehat App</h2>
          <p>
            With the "Health Campaign" feature. now you don't need to be
            confused anymore to get help and medical funding from thousands of #
            generous advice
          </p>
        </div>
        <div className="download__detail">
          <Row>
            <Col span={12} className="download__detail__image">
              <img src={mainpage} alt="mainpage" className="mainpage" />
            </Col>
            <Col span={12}>
              <h4>Desasehat</h4>
              <p>
                Health Access In the Hands Through the Advice platform, users
                can help build village health starting from creating campaigns,
                making donations, and reading articles
              </p>
              <button className="download-button--primary">download</button>
              <button className="download-button--secondary">
                google play
              </button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DownloadPage;
