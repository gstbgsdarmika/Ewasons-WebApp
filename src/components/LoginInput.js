import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/img/bumi.png';

function LoginInput() {
  return (
    <div className="login-input d-flex">
      <div className="login-left w-50 h-100">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1>Selamat datang kembali</h1>
            <p>Silakan masukkan detail informasi Anda</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukan email anda" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*******" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="ingat saya" />
              </Form.Group>
              <Link to="/">
                <div className="mt-5 d-flex justify-content-center align-items-center">
                  <Button className="btn3 fw-bold" type="submit">Masuk</Button>
                </div>
              </Link>
            </Form>
            <p className="mt-3 text-center">Belum punya akun? <Link to="/register">  Daftar</Link></p>
          </div>
        </div>
      </div>
      <div className="login-right w-50 h-100">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="image-login">
              <img src={image} alt="bumi" />
            </div>
            <h1>Sistem Penjualan Sampah Elektronik Berbasis Website</h1>
            <p>Meningkatkan kontribusi masyarakat dalam menanggulangi masalah sampah sehingga dapat membantu melindungi lingkungan sekitar kita.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginInput;
