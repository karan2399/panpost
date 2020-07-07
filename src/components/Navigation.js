import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components';

const Styles = styled.div`
    margin-bottom: 85px;
`;


function Navigation() {
    return (
        <Styles>
            <div>
                <Navbar bg="light" className="fixed-top">
                    <Navbar.Brand href="/" style={{ color: "#FA1616", fontSize: "40px" }}>Panpost</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>

                </Navbar>
            </div>

        </Styles>

    );
}

export default Navigation;
