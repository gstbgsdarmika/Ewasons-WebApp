import React from 'react';
import { Link } from 'react-router-dom';
import NoteFoundImage from '../assets/img/notfound.png';

function NotFoundPage() {
  return (
    <section className="page-not-found mx-3">
      <div className="container-fluid">
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-12">
            <div className="content">
              <div className="notefoundimage">
                <img src={NoteFoundImage} alt="NoteFoundImage" />
              </div>
              <h1>Waduh, tujuanmu nggak ada!</h1>
              <p>Halaman yang Anda cari tidak ada atau terjadi kesalahan lain .</p>
              <Link to="/"><button className="btn-back" type="button">Kembali</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
