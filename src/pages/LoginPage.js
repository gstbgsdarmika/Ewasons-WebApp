import React from 'react';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <section className="login-page position-relative">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-12 position-absolute top-50 start-50 translate-middle">
            <LoginInput />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
