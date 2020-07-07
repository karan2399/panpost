import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'

const Styles = styled.div`
    .carousel-pan{
        margin-bottom:50px;
    }
`;

const Description = () => (
    <Styles>
        <div className="carousel-pan">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src="assets/images/image1.png"
                        alt="The story that no one knew"
                    />
                    <Carousel.Caption>
                        <h3>The story that no one knew</h3>
                        <p> Please read through to know more... </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src="assets/images/image2.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src="assets/images/image3.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    </Styles>
)

export default Description;