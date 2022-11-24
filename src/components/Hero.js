import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero from '../assets/img/hero 1.png';

function Hero() {
  return (
    <div className="hero mx-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={hero} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={hero} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
