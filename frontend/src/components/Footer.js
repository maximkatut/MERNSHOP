import React from "react";
import { Container, Raw, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; MERN Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
