import React from "react";
import FormPqrsdf from "../../components/FormPqrsdf";
import InfoPqrsdf from "../../components/InfoPqrsdf";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
const Home = () => {
  return (
    <Container className="container-home">
      <Row>
        <Col xs={12} className="col1">
          <FormPqrsdf />
        </Col>
        <hr />
        <Col xs={12} className="col2">
          <InfoPqrsdf />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
