import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const Styles = styled.div`
    .h1-color{
        color: #12CAD6
    },
    .jcolor{
        margin-top:85px;
    }
    p{
       color:#fa1616;
    }

`;

const MainJumbotron = () => (
    <Styles>
        <div>
            <Jumbotron className="jcolor">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1 className="h1-color"> People. Pandemic. Posts </h1>
                        </Col>

                        <Col lg={4}>
                            <p>
                                Share your own stories.
                        </p>
                            <p>
                                Inspire by other's.
                         </p>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        </div >
    </Styles>
)

export default MainJumbotron;