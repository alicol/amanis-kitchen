import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import cocoaImg from '../Assets/cocoaCover.png';
import macImg from '../Assets/macCover.png';
import cakeImg from '../Assets/cakeCover.png';
import kitsImg from '../Assets/cookieKitCover.png';
import cookiesImg from '../Assets/cookieCover.png';
import pieImg from '../Assets/pieCover.png';
import Macaroons from './ProductComps/Macaroons';
import Cookies from './ProductComps/Cookies';
import Cakes from './ProductComps/Cakes';
import CookieKits from './ProductComps/CookieKits';
import Pies from './ProductComps/Pies';
import Cocoa from './ProductComps/Cocoa';

const Products = () => {
  const [macaroonModal, setMacaroonModal] = useState(false);
  const [cakeModal, setCakeModal] = useState(false);
  const [cookieModal, setCookieModal] = useState(false);
  const [cookiekitModal, setCookiekitModal] = useState(false);
  const [cocoaModal, setCocoaModal] = useState(false);
  const [pieModal, setPieModal] = useState(false);



    return ( <div id="product-wrapper">
        <h3 class="pink-text" id="product-title" style={{padding: "5vh"}}>Menu</h3>
    <Container>
        <Row>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }} className="grow">
  <Card.Img variant="top" src={macImg} />
  <Card.Body>
    <Card.Title>French Macarons</Card.Title>
    <Card.Text>
     Crisp & chewy meringues with creamy filling.
    </Card.Text>
    <Button className="custom-btn" variant="light" onClick={() => setMacaroonModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }} className="grow">
  <Card.Img variant="top" src={cakeImg} />
  <Card.Body>
    <Card.Title>Cakes</Card.Title>
    <Card.Text>
      Custom cakes created uniquely for you!
    </Card.Text>
    <Button className="custom-btn" variant="light" onClick={() => setCakeModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }} className="grow">
  <Card.Img variant="top" src={cookiesImg} />
  <Card.Body>
    <Card.Title>Cookies</Card.Title>
    <Card.Text>
      Soft sugar cookies with delicate designs.
    </Card.Text>
    <Button className="custom-btn" variant="light" onClick={() => setCookieModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }} className="grow">
  <Card.Img variant="top" src={kitsImg} />
  <Card.Body>
    <Card.Title>Cookie Kits</Card.Title>
    <Card.Text>
      All the fun of decorating cookies, without the work.
    </Card.Text>
    <Button className="custom-btn" variant="light" onClick={() => setCookiekitModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card  style={{ width: '18rem' }} className="grow">
  <Card.Img variant="top" src={cocoaImg} />
  <Card.Body>
    <Card.Title>Hot Cocoa Bombs</Card.Title>
    <Card.Text>
      A trendy & delicious way to enjoy warm hot cocoa!
    </Card.Text>
    <Button className="custom-btn" variant="light" onClick={() => setCocoaModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
            <Col sm={12} md={4} className="product-card">
            <Card style={{ width: '18rem' }} className="grow">
  <Card.Img variant="top" src={pieImg} />
  <Card.Body>
    <Card.Title>Pies</Card.Title>
    <Card.Text>
      Nothing better than a tasty, made-from-scratch pie.
    </Card.Text>
    <Button className="custom-btn" variant="light" onClick={() => setPieModal(true)}>Details...</Button>
  </Card.Body>
</Card>
            </Col>
        </Row>

    </Container>
{/* 
Modals Below */}
    <Macaroons
        show={macaroonModal}
        onHide={() => setMacaroonModal(false)}
      />

    <Cakes
    show={cakeModal}
    onHide={() => setCakeModal(false)}
    />
    <Cookies 
    show={cookieModal}
    onHide={() => setCookieModal(false)}
    />
    <CookieKits 
    show={cookiekitModal}
    onHide={() => setCookiekitModal(false)}
    />
    <Cocoa
    show={cocoaModal}
    onHide={() => setCocoaModal(false)}
    />

    <Pies 
    show={pieModal}
    onHide={() => setPieModal(false)}
    />

       
    </div> );
}
 
export default Products;