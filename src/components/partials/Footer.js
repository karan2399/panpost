import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components';


const Footer = () => (
    <div className="footer-margin">
        <Navbar bg="light" className="navbar-footer" >
            <Navbar.Brand href="/" style={{ color: "#FA1616", fontSize: "20px" }}>Panpost</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link target="_blank" href="https://www.facebook.com/karan2399">Facebook </Nav.Link>
                <Nav.Link target="_blank" href="https://www.instagram.com/karan__234/">Instagram</Nav.Link>
                <Nav.Link target="_blank" href="https://github.com/karan2399">  Github  </Nav.Link>
            </Nav>
        </Navbar>

    </div >
);

export default Footer;