import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import halloMacs from '../../Assets/hallomacs.png';
import heartMacs from '../../Assets/heartmacs.png';
import whiteMacs from '../../Assets/whitemacs.png';


const CookieKits = (props) => {
    
    return (
      <Modal
        {...props}
      
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="home-intro-description"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 class="pink-text-center">Cookie Kits</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="modal-flexbox">
           <div>
             
             <p>These seasonal cookie kits include 12 cookies, 3 bags of icing, and 2 kinds of sprinkles. Enjoy all of the fun that comes with decorating cookies, without the hassle and mess of making them! </p>
           </div>
           <div>
             <h5>Themes:</h5>
             <ul>
               <li>Valentine's Day</li>
               <li>Easter</li>
               <li>Halloween</li>
               <li>Christmas</li>
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

 
export default CookieKits;