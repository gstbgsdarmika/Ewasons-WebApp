import React from 'react';
import {
  Col, Form, Row, Button,
} from 'react-bootstrap';

function EditProfile() {
  return (
    <div className="profile-right mt-4">
      <h1>Profil Saya</h1>
      <p>Lengkapi informasi profil Anda untuk menjaga kemanan anda</p>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="bgsdarmika" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Nama
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Nomor HP
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Jenis Kelamin
          </Form.Label>
          <Col sm="10">
            <div className="d-flex mt-2">
              <Form.Check
                className="me-3"
                type="radio"
                id="radio"
                label="laki-laki"
              />
              <Form.Check
                className="me-3"
                type="radio"
                id="radio"
                label="perempuan"
              />
              <Form.Check
                className="me-3"
                type="radio"
                id="radio"
                label="lainnya"
              />
            </div>
          </Col>
        </Form.Group>
        <div className="mt-2 d-flex justify-content-center align-items-center">
          <Button className="btn3 fw-bold" type="submit">
            Simpan Perubahan
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditProfile;
