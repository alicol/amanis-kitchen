// import React from 'react';

// const Contact = () => {
//     return ( <div>Contact Page</div> );
// }
 
// export default Contact;

import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            <h3 id="contact-title">Let's Connect!</h3>
            </div>
            <div>
    
      <Form onSubmit={this.submitForm}
        action="https://formspree.io/f/xrgokawl"
        method="POST"
        className="contact-form">
      <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group>
    {/* <Form.Label>Example textarea</Form.Label> */}
    <Form.Control as="textarea" type="text" name="message" rows={3} placeholder="Enter message" />
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
