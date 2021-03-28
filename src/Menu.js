import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" >
                <Container>

                    <Navbar.Brand href="/App">LOGIN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">DashBoard</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/task_one">Task One</NavDropdown.Item>
                                <NavDropdown.Item href="/task_two">Task Two</NavDropdown.Item>
                                <NavDropdown.Item href="/task_third">Task Three</NavDropdown.Item>
                                <NavDropdown.Item href="/task_four">Task Four</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;   