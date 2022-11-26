import React from 'react';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <section className="register-page position-relative">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-12 position-absolute top-50 start-50 translate-middle">
            <RegisterInput />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
