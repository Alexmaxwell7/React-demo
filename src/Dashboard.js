import React from "react";
import Nav from "./nav";
import Box from "@material-ui/core/Box";
import Grid from "./grid";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Row, Col, Image } from "react-bootstrap";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

import "./App.css";

function Dash() {
  return (
    <div className="">
      <Router>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <Row>
              <Col>
                <Image src="./logo.png" rounded />
              </Col>
            </Row>
          </MDBNavbarBrand>
          <MDBCollapse>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Features</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Pricing</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>

      <span style={{ fontSize: "35px" }}>DashBoard</span>
      <span> All Projects </span>
      <Box
        display="flex"
        flexDirection="row-reverse"
        bgcolor="background.paper"
      >
        <Box p={1} bgcolor="grey.300">
          <Grid />
        </Box>
      </Box>
      <br />
      <br />
      <MDBContainer size="md">
        <MDBRow>
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardBody>
                <MDBCardTitle>Project Name</MDBCardTitle>
                <MDBCardText>
                <MDBCardImage
                className="img-fluid"
                src=""
                waves
              />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardBody>
                <MDBCardTitle>Marketing</MDBCardTitle>
                <MDBCardText>
                  <p>CountryLocation UK,LiverPool</p>
                  <p>Department Owner jessica</p>
                  <p>Email Jessica@dove.com</p>
                </MDBCardText>
                <span>8 Client</span>
                <span>| 12 project |</span>
                <span> 29 Surveys</span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Dash;
