import React from 'react';
import { Carousel, Image } from 'react-bootstrap'

const Slider = () => {
    return (
        
        <Carousel classname='containerr'>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./images/c1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>1 Series</h3>
      <p>Dummy data</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./images/c2.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>3 Series</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./images/c3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>5 Series</h3>
      <p>Dummy data</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      );
}
 
export default Slider;