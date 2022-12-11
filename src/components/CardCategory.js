import React from 'react';
import kategory1 from '../assets/img/kategori 1.png';
import kategory2 from '../assets/img/kategori 2.png';
import kategory3 from '../assets/img/kategori 3.png';
import kategory4 from '../assets/img/kategori 4.png';

function CardCategory() {
  return (
    <>
      <div className="col-6 col-md-3 col-lg-3">
        <div className="category-card mb-3">
          <div className="category-img">
            <img className="d-block w-100" src={kategory1} alt="gambar kategori" />
          </div>
          <span className="category-name">Laptop</span>
        </div>
      </div>
      <div className="col-6 col-md-3 col-lg-3">
        <div className="category-card mb-3">
          <div className="category-img">
            <img className="d-block w-100" src={kategory2} alt="gambar kategori" />
          </div>
          <span className="category-name">CPU</span>
        </div>
      </div>
      <div className="col-6 col-md-3 col-lg-3">
        <div className="category-card mb-3">
          <div className="category-img">
            <img className="d-block w-100" src={kategory3} alt="gambar kategori" />
          </div>
          <span className="category-name">Monitor</span>
        </div>
      </div>
      <div className="col-6 col-md-3 col-lg-3">
        <div className="category-card mb-3">
          <div className="category-img">
            <img className="d-block w-100" src={kategory4} alt="gambar kategori" />
          </div>
          <span className="category-name">Kulkas</span>
        </div>
      </div>
    </>
  );
}

export default CardCategory;
