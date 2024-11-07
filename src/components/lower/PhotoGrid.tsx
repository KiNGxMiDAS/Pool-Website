import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PhotoGrid = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={3}>
          <img src="/path/to/photo1.jpg" alt="Photo 1" className="img-fluid" />
        </Col>
        <Col md={3}>
          <img src="/path/to/photo2.jpg" alt="Photo 2" className="img-fluid" />
        </Col>
        <Col md={3}>
          <img src="/path/to/photo3.jpg" alt="Photo 3" className="img-fluid" />
        </Col>
        <Col md={3}>
          <img src="/path/to/photo4.jpg" alt="Photo 4" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoGrid;
