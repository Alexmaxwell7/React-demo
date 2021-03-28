import React from "react";
import { Row, Col,Image} from 'react-bootstrap';
import Menu from "./Menu";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">
      <Row>
        <Col xs={6} md={4}>
          <Image src="./logo.png" rounded />
        </Col>
      </Row>
    </div>
    <div className="navbar__item">About Us</div>
    <div className="navbar__item">Contact</div>
    <div className="navbar__item">Help</div>
  </header>
);

export default NavBar;
