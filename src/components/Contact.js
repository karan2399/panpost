import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


const Contact = () => (
    <div>
        {/* <Row className="justify-content-md-center">
        <Col xs lg="2"> */}
        <Row>
            <Col xs={8}>
                <Form>
                    <Col xs={7}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label></Form.Label>
                            <Form.Control type="name" placeholder="Name" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Email" />

                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">

                            <Form.Control type="subject" placeholder="Subject" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">

                            <Form.Control as="textarea" placeholder="Message.." />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Col>
                </Form>
            </Col>
            <Col>
                <h3 style={{padding: '10px'}}>Our contact</h3>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Gargi Patel</ListGroup.Item>
                        <ListGroup.Item>Henil Parikh</ListGroup.Item>
                        <ListGroup.Item>Harsimran</ListGroup.Item>
                        <ListGroup.Item>Karan Patel</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>


    </div>
)

export default Contact;