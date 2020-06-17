import React from "react";
import FadeIn from "react-fade-in";

import { Layout, Row, Col, Typography, Input } from "antd";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./styles.css";

import mainIllustration from "../../assets/home-illustration.svg";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

function Home() {
  return (
    <Layout className="layout">
      <Navbar />
      <FadeIn transitionDuration={600}>
        <Content id="home-page">
          <Row align="middle">
            <Col span={12}>
              <Row justify="center">
                <Title>
                  Find the <br /> <span>perfect job</span>
                </Title>
              </Row>
              <Row justify="center">
                <Title level={3}>Your dream tech job is waiting for you!</Title>
              </Row>
              <Row justify="center">
                <Search
                  placeholder="Search for a job..."
                  onSearch={(value) => console.log(value)}
                  enterButton
                />
              </Row>
            </Col>
            <Col span={12} justify="center">
              <img
                src={mainIllustration}
                alt=""
                className="main-illustration"
              />
            </Col>
          </Row>
        </Content>
      </FadeIn>
      <Footer style={{ position: 'absolute', bottom: 0 }} />
    </Layout>
  );
}

export default Home;
