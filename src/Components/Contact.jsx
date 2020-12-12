// import React from 'react';

// const Contact = () => {
//     return ( <div>Contact Page</div> );
// }
 
// export default Contact;

import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div id="contact-background">
        <div id="contact-box">
            
            <div>
            <h3 id="contact-title">Order Inquiry</h3>
            </div>
            <div>
    
      <Form onSubmit={this.submitForm}
        action="https://formspree.io/f/xrgokawl"
        method="POST"
        className="contact-form">
    <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Group>
      <Form.Control
        type="name" name="name"
        placeholder="Enter Name"
      />
      <Form.Text className="text-muted">
           First & Last
        </Form.Text>
      </Form.Group>
    </Col>
        <Col xs="auto">
      <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </Col>
      <Col xs="auto">
      <Form.Group controlId="formBasicPhone">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="tel" name="phone" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="Enter phone" />
        <Form.Text className="text-muted">
          (format: xxx-xxx-xxxx )
        </Form.Text>
      </Form.Group>
      </Col>
      </Form.Row>
      <Form.Row className="align-items-center">
      <Col xs="auto">
      <Form.Group>
      <Form.Control as="select" defaultValue="Select sweet..." name="category">
        <option>Select sweet...</option>
        <option value="cake">Custom Cake</option>
        <option value="macaroon">Macaroon</option>
        <option value="cookies">Cookies</option>
        <option value="pie">Pie</option>
        <option value="cookie-kit">Cookie Kit</option>
        <option value="cocoa-bomb">Hot Cocoa Bomb</option>
        <option value="other">Other</option>
      </Form.Control>
      <Form.Text className="text-muted">
          Yum!
        </Form.Text>
    </Form.Group>
    </Col>
    <Col xs="auto">
    <Form.Group>
      <Form.Control type="date" name="date-by" id="date-by" placeholder="Date you'll want it:" />
      <Form.Text className="text-muted">
          Date you'll want it
        </Form.Text>
    </Form.Group>
    </Col>
    </Form.Row>
      <Form.Group>
    {/* <Form.Label>Example textarea</Form.Label> */}
    <Form.Control as="textarea" type="text" name="message" rows={3} placeholder="Description... the more details the better!" />
     </Form.Group>
      
      {status === "SUCCESS" ? <p className="text-muted">Thanks! I'll get back with you soon!</p> : <Button variant="light" className="custom-btn" type="submit">Submit</Button>}
     {status === "ERROR" && <p className="text-muted">Ooops! There was an error.</p>}
    </Form>
    </div>
    </div>
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
};

export default MyForm;
