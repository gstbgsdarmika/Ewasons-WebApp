import React from 'react';
import kategory1 from '../assets/img/kategori 1.png';
import kategory2 from '../assets/img/kategori 2.png';
import kategory3 from '../assets/img/kategori 3.png';
import kategory4 from '../assets/img/kategori 4.png';

function CardCategory() {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="category-card">
          <div className="category-img">
            <img className="d-block w-100" src={kategory1} alt="First slide" />
          </div>
          <span className="category-name">Laptop</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="category-card">
          <div className="category-img">
            <img className="d-block w-100" src={kategory2} alt="First slide" />
          </div>
          <span className="category-name">CPU</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="category-card">
          <div className="category-img">
            <img className="d-block w-100" src={kategory3} alt="First slide" />
          </div>
          <span className="category-name">Monitor</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="category-card">
          <div className="category-img">
            <img className="d-block w-100" src={kategory4} alt="First slide" />
          </div>
          <span className="category-name">Kulkas</span>
        </div>
      </div>
    </>
  );
}

export default CardCategory;
