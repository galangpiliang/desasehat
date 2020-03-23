import React, { Component } from "react";
import { Row, Col } from "antd";
import app from "../../images/app.png";

export class DownloadPage extends Component {
  render() {
    return (
      <div className="download">
        <div className="download__title">
          <h2>Desasehat App</h2>
          <p>
            Dengan fitur "Health Campaign".sekarang anda tidak perlu bingung
            lagi untuk mendapatkan bantuan dan pembiyaan medis dari ribuan
            #Dermawan Desasehat
          </p>
        </div>
        <div className="download__detail">
          <Row>
            <Col span={12} className="download__detail__image">
              <img src={app} alt="app" className="app-image" />
            </Col>
            <Col span={12}>
              <h4>Lorem ipsum si simply</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
