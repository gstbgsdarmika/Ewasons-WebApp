import React from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp,
} from 'react-icons/fa';
import logo from '../assets/img/logo.svg';

function Footer() {
  return (
    <div className="footer mx-3">
      <div className="container-fluid">
        <div className="row">
          <div className="footer-right col-lg-4 col-md-4">
            <h1 className="logo2 fw-bold">
              Ewa
              <span>Sons</span>
              <img className="img-ewasons ms-2" src={logo} alt="Logo EwaSons" />
            </h1>
            <p>Untuk mendapatkan informasi terbaru tentang kami, Anda dapat mengunjungi akun media sosial kami</p>
            <div className="sosial-media-list d-flex">
              <div className="sosial-media me-2"><FaFacebookF /></div>
              <div className="sosial-media me-2"><FaTwitter /></div>
              <div className="sosial-media me-2"><FaInstagram /></div>
              <div className="sosial-media me-2"><FaWhatsapp /></div>
            </div>
          </div>
          <div className="col-lg-6 mt-3 col-md-6 offset-lg-2 offset-md-2 footer-left">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h3>Informasi</h3>
                <h6>Tentang kami</h6>
                <h6>Toko kantor</h6>
                <h6>Bergabung</h6>
              </div>
              <div className="col-lg-4 col-md-4">
                <h3>Bantuan</h3>
                <h6>FAQ's</h6>
                <h6>Pusat bantuan</h6>
                <h6>Syarat dan Ketentuan</h6>
              </div>
              <div className="col-lg-4 col-md-4">
                <h3>Sosial Media</h3>
                <h6>Facebook</h6>
                <h6>Instagram</h6>
                <h6>Twitter</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
