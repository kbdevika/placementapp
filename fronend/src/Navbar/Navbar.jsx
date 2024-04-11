import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-center">Home</Nav.Link>
                        <Nav.Link href="/studentDashboard" className="text-center">profile</Nav.Link>
                        <Nav.Link href="/JobDashboard" className="text-center">Job Details</Nav.Link>
                        <Nav.Link href="/" className="text-center">notification</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavBar
