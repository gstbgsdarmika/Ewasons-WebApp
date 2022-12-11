import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import image from '../assets/img/bumi.png';
import useInput from '../hooks/UseInput';
import { login, putAccessToken } from '../utils/api';

function LoginInput() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login(
      dispatch,
      { email, password },
    ).then((response) => {
      if (response.error) {
        setError(response.error);
      } else {
        putAccessToken(response.data.accessToken);
        navigate('/');
      }
    });
  };

  return (
    <div className="login-input d-flex">
      <div className="login-left">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1>Selamat datang kembali</h1>
            <p>Silakan masukkan detail informasi Anda</p>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukan email anda" required onChange={onEmailChange} value={email} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukan password anda" required onChange={onPasswordChange} value={password} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="ingat saya" />
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
                    'Masuk'
                  )}
                </Button>
              </div>
            </Form>
            <p className="mt-3 text-center">Belum punya akun? <Link to="/register">  Daftar</Link></p>
            {error ? <span className="text-center d-inline-flex justify-content-center w-100 text-white rounded bg-danger">Email atau password salah, silahkan coba lagi...</span> : null}
          </div>
        </div>
      </div>
      <div className="login-right order-1 ">
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
