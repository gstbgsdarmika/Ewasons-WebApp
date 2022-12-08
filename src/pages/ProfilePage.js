import React from 'react';
import {
  Nav, Col, Form, Row, Button,
} from 'react-bootstrap';
import {
  FaUserAlt, FaBell, FaClipboardList, FaRegEdit,
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Footer from '../components/Footer';
import user from '../assets/img/user.jpg';
import NavBar from '../components/NavBar';

function ProfilePage({ logout }) {
  return (
    <>
      <NavBar />
      <div className="profile-page mx-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Nav defaultActiveKey="/home" className="flex-column cc">
                <div className="user-profile d-flex">
                  <div className="img-profile">
                    <img src={user} alt="img-profile" />
                  </div>
                  <div className="ms-3">
                    <h1>Bgs Darmika</h1>
                    <p><FaRegEdit className="me-1" />Ubah profile</p>
                  </div>
                </div>
                <Nav.Link eventKey="link-1" className="nav-link-profile fw-bold"><FaUserAlt className="me-3" />Akun Saya</Nav.Link>
                <Nav.Link eventKey="link-1" className="nav-item-profile">Profile</Nav.Link>
                <Nav.Link eventKey="link-1" className="nav-item-profile">Alamat</Nav.Link>
                <Nav.Link eventKey="link-1" className="nav-item-profile">Ubah Password</Nav.Link>
                <Nav.Link eventKey="link-1" className="nav-link-profile fw-bold"><FaClipboardList className="me-3" />Pesanan Saya</Nav.Link>
                <Nav.Link eventKey="link-1" className="nav-link-profile fw-bold"><FaBell className="me-3" />Notifikasi</Nav.Link>
                <Nav.Link onClick={logout} className="nav-link-profile fw-bold"><FiLogOut className="me-3" />Keluar</Nav.Link>
              </Nav>
            </div>
            <div className="col-md-10">
              <div className="profile-right">
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
                        <Form.Check className="me-3" type="radio" id="radio" label="laki-laki" />
                        <Form.Check className="me-3" type="radio" id="radio" label="perempuan" />
                        <Form.Check className="me-3" type="radio" id="radio" label="lainnya" />
                      </div>
                    </Col>
                  </Form.Group>
                  <div className="mt-2 d-flex justify-content-center align-items-center">
                    <Button className="btn3 fw-bold" type="submit">Simpan Perubahan</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
