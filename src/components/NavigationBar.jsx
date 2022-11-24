import React from 'react';
import {
  Badge,
  Container,
  Nav, Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light" key="md" expand="md" className="fw-bold px-5 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-2 d-flex align-items-center">
          <img
            alt=""
            src="../img/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top fs-2"
          />
          {' '}
          Ewasons
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3" activeKey="">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/products">
                  <div className="position-relative">
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    <Badge pill bg="info" className="position-absolute top-0 start-100 translate-middle">9</Badge>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
