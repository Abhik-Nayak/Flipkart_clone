import React,{useState,useEffect} from 'react';
import Layout from '../../components/Layout';
import Input from "../../components/UI/Input";
import { Container, Form, Row, Col, Button } from "react-bootstrap";


const Signup = () => {
  const [email,setEmail] = useState("");

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder='Firstname' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder='name' />
                  </Form.Group>
                </Col>
              </Row>

              <Input placeholder="Enter your email address"
                label="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value)}}
              />

              <Input placeholder="Enter Password "
                label="Password"
                type="password"
                value=""
                onChange={() => { }}
              />

              <Form.Group controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label="Check me out" />
              </Form.Group>

              <Button variant='primary' type='submit'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Signup;