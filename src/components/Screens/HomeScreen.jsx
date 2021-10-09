import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../CategoryBar/CategoryBar";
import Video from "../Video/Video";

const HomeScreen = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <CategoryBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
