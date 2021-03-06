import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import halloMacs from '../../Assets/hallomacs.png';
import heartMacs from '../../Assets/heartmacs.png';
import whiteMacs from '../../Assets/whitemacs.png';


const Macaroons = (props) => {
    
    return (
      <Modal
        {...props}
      
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="home-intro-description"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 class="pink-text-center">French Macaroons</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="modal-flexbox">
           <div>
             
             <p>Homemade, french macaroons with delicious ganache-based or buttercream fillings! These tasty confections are absolutely perfect for any gathering or occasion. And, they're gluten-free!</p>
           </div>
           <div>
             <h5>Flavors: </h5>
             <ul>
               <li>Chocolate</li>
               <li>Vanilla Bean</li>
               <li>Fruity Pebbles</li>
               <li>White Chocolate</li>
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

  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src={whiteMacs}
      alt="Third slide"
      class="carousel-image"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src={heartMacs}
      alt="Third slide"
      class="carousel-image"
    />
  </Carousel.Item>
</Carousel>

           </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="custom-btn" variant="light">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

 
export default Macaroons;