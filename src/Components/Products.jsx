import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import cocoaImg from '../Assets/cocoabomb.jpg';
import macImg from '../Assets/macaroon.jpg';
import cakeImg from '../Assets/cake.jpg';
import kitsImg from '../Assets/kits.jpg';
import cookiesImg from '../Assets/cookies.jpg';
import pieImg from '../Assets/pie.jpg';

const Products = () => {
  const [macaroonModal, setMacaroonModal] = useState(false);

  function MyMacaroonModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Macaroons
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            About my macaroons....
          </p>
          <h5>Flavors</h5>
          <ul>
            <li>Chocolate</li>
            <li>Vanilla Bean</li>
            <li>Strawberry</li>
            <li>Raspberry</li>
            <li>Fruity Pebbles</li>
            <li>Chai</li>
            <li>White Chocolate</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }




    return ( <div id="product-wrapper">
        <h3 class="white-text" id="product-title">Products</h3>
    <Container>
        <Row>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={macImg} />
  <Card.Body>
    <Card.Title>Macaroons</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={() => setMacaroonModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cakeImg} />
  <Card.Body>
    <Card.Title>Cakes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cookiesImg} />
  <Card.Body>
    <Card.Title>Cookies</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={kitsImg} />
  <Card.Body>
    <Card.Title>Cookie Kits</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cocoaImg} />
  <Card.Body>
    <Card.Title>Hot Cocoa Bombs</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pieImg} />
  <Card.Body>
    <Card.Title>Pies</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
        </Row>

    </Container>
{/* 
Modals Below */}
    <MyMacaroonModal
        show={macaroonModal}
        onHide={() => setMacaroonModal(false)}
      />

       
    </div> );
}
 
export default Products;