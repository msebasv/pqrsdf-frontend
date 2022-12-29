import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

const RequestPqrsdf = (props) => {
  return (
    <Container
      fluid
      className={`${
        props.show ? "container-request-open" : "container-request-close"
      }`}
    >
      <Row>
        <Col xs={12} md={6}>
          <h6>Radicado: SNR2022ER164231</h6>
        </Col>
        <Col xs={12} md={6}>
          <h6>Estado: Finalizado</h6>
        </Col>
        <Col xs={12}>
          <h6>Respuesta: 00001.pdf</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestPqrsdf;
