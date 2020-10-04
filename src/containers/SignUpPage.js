import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import UserInput from '../components/UserInput'

const SignUpPage = () => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <UserInput
                                        controlID="formBasicFirstname"
                                        label="First Name"
                                        type="text"
                                        placeholder="Albert"
                                        required={true}
                                    />
                                </Col>
                                <Col md={6}>
                                    <UserInput
                                        controlID="formBasicLastname"
                                        label="Last Name"
                                        type="text"
                                        placeholder="Einstein"
                                        required={true}
                                    />
                                </Col>
                            </Row>
                            <UserInput
                                controlID="formBasicEmail"
                                label="Email address"
                                type="email"
                                placeholder="albert.einstein@blackhole.com"
                                errorMessage="Your email is never shared with anyone else."
                                required={true}
                            />
                            <UserInput
                                controlID="formBasicPassword"
                                label="Password"
                                type="password"
                                required={true}
                            />
                            <Button variant="primary" type="submit">
                                Register
                    </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

export default SignUpPage
