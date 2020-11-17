import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const About = () => {
    return ( <div id="about-wrapper">
      
       <Container>
  <Row>
    <Col xs={12} md={5} className="column-flexbox">
      <Image src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/77165479_10217994187383937_1364199376917889024_o.jpg?_nc_cat=110&ccb=2&_nc_sid=85a577&_nc_ohc=P2LhJAQuBmIAX9O0XWA&_nc_ht=scontent-ort2-1.xx&oh=39fd5b4205465f86c0a8be36253e0a83&oe=5FC4EC1D" rounded fluid />
    </Col>
    <Col xs={12} md={7} className="column-flexbox">
        <h3 class="white-text">Meet Amani</h3>
        <p class="p-text">I love making cakes Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati, magni, at molestiae laudantium quas asperiores consequatur cumque, maxime nobis nulla veritatis nostrum ipsam unde? Molestiae amet ea consectetur ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi accusantium hic earum optio maxime! Similique cupiditate autem explicabo at mollitia cum dolorum fugit, vitae a tempore velit, eos illo odio?</p>
    </Col>
  </Row>

  <Row>
   <Col xs={12} md={7} className="column-flexbox">
   <h3 class="white-text">This is my family</h3>
        <p class="p-text">This is my family... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eligendi, commodi soluta aperiam eius temporibus sed, ea repellat magnam reprehenderit accusamus impedit. Eius sequi eligendi ratione, nemo molestias accusantium saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea ipsum laborum? Repellendus, vero cupiditate soluta veritatis voluptatum nihil pariatur consectetur earum ab, aspernatur accusantium. Impedit numquam quasi sunt eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et porro rem odit cupiditate quos illo dicta. Earum illo perferendis fuga, rerum omnis voluptatibus ex. Delectus repellat ipsa quisquam tenetur.</p>
    </Col>
    <Col xs={12} md={5} className="column-flexbox">
      <Image src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/82061102_10218446038239926_2065137176336662528_n.jpg?_nc_cat=107&ccb=2&_nc_sid=110474&_nc_ohc=Lm4nmFpYM0kAX8oVFCM&_nc_ht=scontent-ort2-1.xx&oh=e6e052dc3ed26693e5e869b6e117a480&oe=5FC43ED9" rounded fluid />
    </Col>

  </Row>
  
</Container>
    

    </div> );
}
 
export default About;