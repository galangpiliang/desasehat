import React, { Component } from "react";
import { Row, Col } from "antd";

export class FeaturePage extends Component {
  render() {
    return (
      <div className="feature">
        <div className="feature__title">
          <h2>BestFeature</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature__list">
          <Row>
            <Col span={8}>
              <i class="fa far fa-compass"></i>
              <h4>test</h4>
              <p>
                Note that the development build is not optimized. To create a
                production build, use yarn build.
              </p>
            </Col>
            <Col span={8}>
              <i class="fa far fa-compass"></i>
              <h4>test</h4>
              <p>
                Note that the development build is not optimized. To create a
                production build, use yarn build.
              </p>
            </Col>
            <Col span={8}>
              <i class="fa far fa-compass"></i>
              <h4>test</h4>
              <p>
                Note that the development build is not optimized. To create a
                production build, use yarn build.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FeaturePage;
