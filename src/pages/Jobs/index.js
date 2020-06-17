import React from "react";

import { Layout, Row, Col, Typography, Input } from "antd";

import Navbar from "../../components/Navbar";

import "./styles.css";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

function Jobs() {
  return (
    <Layout>
      <Navbar />
      <Content id="jobs-page">
        <Row className="main-heading">
          <Title>The next big step of your career is here</Title>
        </Row>
        <div className="container">
          <Row justify="center" className="main-job-search">
            <Search
              placeholder="Search for the position you want"
              enterButton="Search"
              size="large"
              onSearch={(value) => console.log(value)}
            />
          </Row>
          <Row>
            <Col span={16}>
              <Row align="middle" className="job-card">
                <Col span={5}>
                  <div className="main-color">
                    <img
                      src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f5dad194233fe7b84cbbd11dc152f034d299a87/AbtLogo-FullColor-072dpi%20(1).jpg"
                      alt="enterprise logo"
                      width="100"
                      className="company-logo-img"
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <Row className="job-company">
                    <Title level={2}>Abt Associates</Title>
                  </Row>
                  <Row className="job-title">
                    <h3>
                      Senior Application Developer - Geographically Flexible
                    </h3>
                  </Row>
                </Col>
                <Col span={4} className="job-details">
                  <Row>
                    <span>Tue Jun 16 18:25:33 UTC 2020</span>
                  </Row>
                  <Row>
                    <span>Full Time</span>
                  </Row>
                </Col>
              </Row>
              <Row align="middle" className="job-card">
                <Col span={5}>
                  <div className="main-color">
                    <img
                      src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f5dad194233fe7b84cbbd11dc152f034d299a87/AbtLogo-FullColor-072dpi%20(1).jpg"
                      alt="enterprise logo"
                      width="100"
                      className="company-logo-img"
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <Row className="job-company">
                    <Title level={2}>Abt Associates</Title>
                  </Row>
                  <Row className="job-title">
                    <h3>
                      Senior Application Developer - Geographically Flexible
                    </h3>
                  </Row>
                </Col>
                <Col span={4} className="job-details">
                  <Row>
                    <span>Tue Jun 16 18:25:33 UTC 2020</span>
                  </Row>
                  <Row>
                    <span>Full Time</span>
                  </Row>
                </Col>
              </Row>
              <Row align="middle" className="job-card">
                <Col span={5}>
                  <div className="main-color">
                    <img
                      src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f5dad194233fe7b84cbbd11dc152f034d299a87/AbtLogo-FullColor-072dpi%20(1).jpg"
                      alt="enterprise logo"
                      width="100"
                      className="company-logo-img"
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <Row className="job-company">
                    <Title level={2}>Abt Associates</Title>
                  </Row>
                  <Row className="job-title">
                    <h3>
                      Senior Application Developer - Geographically Flexible
                    </h3>
                  </Row>
                </Col>
                <Col span={4} className="job-details">
                  <Row>
                    <span>Tue Jun 16 18:25:33 UTC 2020</span>
                  </Row>
                  <Row>
                    <span>Full Time</span>
                  </Row>
                </Col>
              </Row>
              <Row align="middle" className="job-card">
                <Col span={5}>
                  <div className="main-color">
                    <img
                      src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1f5dad194233fe7b84cbbd11dc152f034d299a87/AbtLogo-FullColor-072dpi%20(1).jpg"
                      alt="enterprise logo"
                      width="100"
                      className="company-logo-img"
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <Row className="job-company">
                    <Title level={2}>Abt Associates</Title>
                  </Row>
                  <Row className="job-title">
                    <h3>
                      Senior Application Developer - Geographically Flexible
                    </h3>
                  </Row>
                </Col>
                <Col span={4} className="job-details">
                  <Row>
                    <span>Tue Jun 16 18:25:33 UTC 2020</span>
                  </Row>
                  <Row>
                    <span>Full Time</span>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default Jobs;
