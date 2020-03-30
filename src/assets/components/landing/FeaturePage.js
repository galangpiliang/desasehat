import React, { Component } from "react";
import { Row, Col } from "antd";

export class FeaturePage extends Component {
  render() {
    return (
      <div className="feature" id="feature">
        <div className="feature__title">
          <h2>BestFeature</h2>
          <p>
            Assist village community health through the features in the platform
            Desasehat
          </p>
        </div>
        <div className="feature__list">
          <Row>
            <Col span={8}>
              <i class="fas fa-hands-helping" />
              <h4>Campaign</h4>
              <p>
                Use the campaign feature to increase the solidarity and kinship
                of the villagers
              </p>
            </Col>
            <Col span={8}>
              <i class="fas fa-donate"></i>
              <h4>Donation</h4>
              <p>Donation of funds to help those who need funds</p>
            </Col>
            <Col span={8}>
              <i class="fas fa-book-reader"></i>
              <h4>Article</h4>
              <p>
                increase awareness of the health of rural communities by reading
                health articles
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FeaturePage;
