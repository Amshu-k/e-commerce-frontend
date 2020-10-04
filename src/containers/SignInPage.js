import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import UserInput from '../components/UserInput'

const SignInPage = () => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
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
                                Login
                    </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SignInPage
