import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/your-image1.jpg" // Replace with actual image path
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Welcome to Pure Life</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/your-image2.jpg" // Replace with actual image path
          alt="Second slide"
        />
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
  );
};

export default HeroCarousel;
