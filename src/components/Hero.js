import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../assets/img/hero 1.png';
import hero2 from '../assets/img/hero 2.png';
import hero3 from '../assets/img/hero 3.png';

function Hero() {
  return (
    <div className="hero mx-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={hero1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={hero2} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={hero3} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
