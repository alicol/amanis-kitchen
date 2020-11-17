import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {
    return ( <div>
        <h2>Gallery</h2>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121634480_2632413630401986_4233889698393922257_o.jpg?_nc_cat=111&ccb=2&_nc_sid=110474&_nc_ohc=RANbSFv-tJYAX9nW22W&_nc_ht=scontent-ort2-1.xx&oh=4a31462cfa563e041fc4489dd16d4207&oe=5FC4D3ED"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/s960x960/106207515_2535314470111903_6242560592961318584_o.jpg?_nc_cat=107&ccb=2&_nc_sid=dd9801&_nc_ohc=FBM1X67Zi6cAX8LPR8M&_nc_ht=scontent-ort2-1.xx&tp=7&oh=57a2470833250defd73bced81ee7b328&oe=5FC507EF"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/78754529_2350074721969213_6007141762143879168_o.jpg?_nc_cat=102&ccb=2&_nc_sid=110474&_nc_ohc=RvnILcySd2cAX8Px4CQ&_nc_ht=scontent-ort2-1.xx&oh=7390150d48a2d37d692ba99d2d70f615&oe=5FC50F3F"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/118992155_2595325164110833_2252546190725284058_o.jpg?_nc_cat=106&ccb=2&_nc_sid=110474&_nc_ohc=hRoujXEYYp0AX_vREDQ&_nc_oc=AQndDXV1XE-skY9sp29aP3pwxZ-wayLHd4t9WYIzjL4wEhlznW2EKnlW5PUZegFd8ww&_nc_ht=scontent-ort2-1.xx&oh=7078bd17421e76869ab4d93a70315433&oe=5FC7F84C"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div> );
}
 
export default Gallery;