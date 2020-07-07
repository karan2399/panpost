import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";


const Styles = styled.div`
    width:50%;
    margin:auto;
`;

const Login = () => (
    <Styles>
        <div>
            <Form variant="light">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
            </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    </Styles>
);
export default Login;