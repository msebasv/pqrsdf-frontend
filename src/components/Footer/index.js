import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoCuraduriaBlanco from "../../assets/images/brandCuraduriaBlanco.png";
import GovLogo from "../../assets/images/govLogo.svg";
import COColombiaLogo from "../../assets/images/COColombiaLogo.svg";
import "./index.scss";
const Footer = () => {
  return (
    <Container className="container-footer">
      <Row>
        <Col xs={12} md={6} className="col1-footer">
          <a href="https://www.gov.co/">
            <img src={GovLogo} alt="" className="gov-logo" />
          </a>
        </Col>
        <Col xs={12} md={6} className="col2-footer">
          <a href="https://www.gov.co/">
            <img src={COColombiaLogo} alt="" className="co-colombia-logo" />
          </a>
        </Col>
        <Col xs={12} md={6} className="col3-footer">
          <img src={LogoCuraduriaBlanco} alt="" className="brand-footer" />
        </Col>
        <Col xs={12} md={6} className="col4-footer">
          <div className="contact-data">
            <h2>Contacto</h2>
            <p>Dirección: Carrera 13A No. 96-24</p>
            <p>Celular: (+57) 311 485 7338</p>
            <p>PBX: (+57) (601) 441 4573</p>
            <p>Correo: info@curaduria2bogota.com</p>
            <p>
              Notificaciones Judiciales:
              notificacionesjudiciales@curaduria2bogota.com
            </p>
            <p>Términos y Condiciones</p>
          </div>
        </Col>
        <Col xs={12} md={6} className="col5-footer"></Col>
        <Col xs={12} md={6} className="col6-footer">
          <p className="map-site">
            <a href="https://curaduria2bogota.com/mapa-del-sitio/">
              Mapa del sitio
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
