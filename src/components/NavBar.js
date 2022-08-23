import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/navbar.module.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" variant='dark' className={[styles.backgroundNav, "fixed-top"]} >
        <Container>
          <Navbar.Brand href="#home"><span style={{ fontWeight: '700', color: '#FFC300' }}>AZHAM</span>RASYID</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link href="#whoami" className={styles.navlink}>Who am i ?</Nav.Link>
              <Nav.Link href="#myprojects" className={styles.navlink}>My Projects</Nav.Link>
              <Nav.Link href="#contacts" className={styles.navlink}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>
    </>
  );
}

export default NavBar;
