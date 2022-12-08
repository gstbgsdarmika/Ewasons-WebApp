import React from 'react';
import {
  Col, Form, Row, Button,
} from 'react-bootstrap';

function ProductInput() {
  return (
    <div className="product-input">
      <h1>Tambahkan Produk</h1>
      <p>Lengkapi informasi produk yang anda ingin jual</p>
      <div className="form-input">
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Nama</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Harga (Rp)</Form.Label>
            <Col sm="10"><Form.Control type="text" for="textarea" placeholder="" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Deskripsi</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Gambar Produk</Form.Label>
            <Col sm="10"><Form.Control type="file" placeholder="" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Kategori</Form.Label>
            <Col sm="10">
              <div className="d-flex mt-2">
                <Form.Check className="me-3" type="radio" id="radio" label="elektronik" />
                <Form.Check className="me-3" type="radio" id="radio" label="komputer" />
                <Form.Check className="me-3" type="radio" id="radio" label="lainnya" />
              </div>
            </Col>
          </Form.Group>
          <div className="mt-2 d-flex justify-content-center align-items-center">
            <Button className="btn3 fw-bold" type="submit">Tambahkan produk</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ProductInput;
