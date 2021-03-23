import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col} from 'react-bootstrap';
import LeftSide from "./LeftSide";
import Menu from "./Menu";
import RightSide from "./RightSide";
import {Container,Image} from "react-bootstrap";
function App() {
  return (
    <div className="" >
      <Menu />
      <Container>
        <br/>
        <br/>
  <Row>
    <Col xs={6} md={4}>
      <Image src="./logo.png" rounded />
    </Col>
  </Row>
  <br/>
   <Row className="landing" style={{backgroundColor:"#ecedef"}}>
        <Col ><LeftSide /></Col>
        
        <Col ><RightSide /></Col>
      </Row>
</Container>
     <br/>
     <br/>
     <span>@2018 Eolas International | Terms of Service | Privacy Policy</span>
    </div>
  );
}

export default App;