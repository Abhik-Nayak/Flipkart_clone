import React from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group controlId='formBasicEmail'>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.email} placeholder={props.placeholder} />
  </Form.Group>
  )
}

export default Input;