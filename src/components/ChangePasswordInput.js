import React from 'react';
import {
  Col, Form, Row, Button,
} from 'react-bootstrap';

function ChangePasswordInput() {
  return (
    <div className="change-password-input mt-4">
      <h1>Ubah Password</h1>
      <p>Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password Anda ke orang lain.</p>
      <div className="form-input">
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Password Saat Ini</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Password Yang Baru</Form.Label>
            <Col sm="10"><Form.Control type="text" for="textarea" placeholder="" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Konfirmasi Password</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" /></Col>
          </Form.Group>

          <div className="mt-2 d-flex justify-content-center align-items-center">
            <Button className="btn3 fw-bold" type="submit">Konfirmasi</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ChangePasswordInput;
