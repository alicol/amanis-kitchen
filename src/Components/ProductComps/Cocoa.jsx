import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import halloMacs from '../../Assets/hallomacs.png';
import heartMacs from '../../Assets/heartmacs.png';
import whiteMacs from '../../Assets/whitemacs.png';


const Cocoa = (props) => {
    
    return (
      <Modal
        {...props}
      
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="home-intro-description"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 class="pink-text-center">Cocoa Bombs</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="modal-flexbox">
           <div>
             
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis doloremque sed dolorum corporis. Minima, dolorum nostrum aliquam distinctio dolorem quaerat nulla quibusdam hic blanditiis suscipit ipsum? Expedita aut cum neque!</p>
           </div>
           <div>
             <h5>Flavors</h5>
             <ul>
               <li>Mocha</li>
               <li>Milk Chocolate</li>
               <li>White Chocolate</li>
               <li>Peppermint Candy Cane</li>
               <li>Chocolate Mint</li>
               <li>Strawberry</li>
             </ul>
           </div>
           <div>
             
           <Carousel>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src={halloMacs}
      alt="First slide"
      class="carousel-image"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src={whiteMacs}
      alt="Third slide"
      class="carousel-image"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src={heartMacs}
      alt="Third slide"
      class="carousel-image"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/* <div> 
    <h5>Pricing</h5>
</div> */}

           </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="custom-btn" variant="light">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

 
export default Cocoa;