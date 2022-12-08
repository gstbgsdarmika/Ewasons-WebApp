import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import image from '../assets/img/bumi.png';
import useInput from '../hooks/UseInput';
import { register } from '../utils/api';

function RegisterInput() {
  const [username, onUsernameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register(
      dispatch,
      { username, email, password },
    ).then((response) => {
      if (response.error) {
        setError(response.error);
      } else {
        navigate('/login');
      }
    });
  };

  return (
    <div className="register-input d-flex">
      <div className="register-left">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1>Buat akun baru</h1>
            <p>Silakan, Masukkan data Anda dengan benar</p>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Masukan nama anda" onChange={onUsernameChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukan email anda" onChange={onEmailChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Min. 8 karakter" onChange={onPasswordChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="saya setuju dengan Syarat dan ketentuan" required />
              </Form.Group>
              <div className="mt-5 d-flex justify-content-center align-items-center">
                <Button className="btn3 fw-bold" type="submit" disabled={isFetching}>
                  {isFetching ? (
                    <div className="d-flex justify-content-center">
                      <DotLoader
                        color="#fff"
                        size={20}
                        speedMultiplier={3}
                      />
                    </div>
                  ) : (
                    'Daftar'
                  )}
                </Button>
              </div>
            </Form>
            <p className="mt-3 text-center">Sudah memiliki akun?<Link to="/login"> Masuk</Link></p>
            {error ? <span className="text-center d-inline-flex justify-content-center w-100 text-white rounded bg-danger">Email atau password tidak valid, silahkan coba lagi...</span> : null}
          </div>
        </div>
      </div>
      <div className="register-right">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="image-register">
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

export default RegisterInput;
