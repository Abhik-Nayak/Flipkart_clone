import React from 'react';
import Layout from '../../components/Layout';
import {Container , Form, Row, Col, Button} from "react-bootstrap";


const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder="enter your email address"/>
            <Form.Text className='text-muted'> We will never share your email with others.</Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </Layout>
  )
}

export default Signin;