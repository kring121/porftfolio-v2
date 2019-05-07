import React from 'react';
import { Col, Container, Card, CardBody, CardText, Row } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faPaintBrush, faHammer } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faLaptopCode, faPaintBrush, faHammer);

function About() {
  return (
    <Container id='about' fluid>
      <div className='space-filler'/>
      <h1 className='display-3 text-secondary text-center text-md-left mb-4 mb-md-5'>About</h1>
      <Row>
        <Col sm='12' md='4 mb-4'>
          <Card color='dark' className='text-center'>
            <CardBody className='text-info'>
              <FontAwesomeIcon icon='user' className='card-icon'/>
              <h4 className='card-title'>Who I am</h4>
              <CardText>I am an ambitious and creative fullstack web developer that strives for excellence. My motto is: "It's not that I can't do it, it's just that I haven't learned it yet". I am extremely outgoing person that loves to work with others but also has the ability to work solo. I am currently living in New York, but open to opportunities elsewhere</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' md='4 mb-4'>
          <Card color='dark' className='text-center'>
            <CardBody className='text-info'>
              <FontAwesomeIcon icon='hammer' className='card-icon'/>
              <h4 className='card-title'>What I do</h4>
              <CardText>Simply put, I build things. More specifically, I build innovative and well designed digital products. I take pride in my work, and I give 110% effort into it. I enjoy both sides of deveopment but my stronger focus is on the frontend. I am committed to self improvement, which is why everyday I teach myself something new or practice a existing skill.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' md='4 mb-4'>
          <Card color='dark' className='text-center'>
            <CardBody className='text-info'>
              <FontAwesomeIcon icon='paint-brush' className='card-icon'/>
              <h4 className='card-title'>How I do it</h4>
              <CardText>I am an extremely detail oriented person. I believe that sometimes the littlest things make all the difference. Even if it's just a simple animation, it can completely change the experience for the user. I combine my knowledge of the newest technologies with my passion and unlimited creativity to make visually captivating and interactive products.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <blockquote className='blockquote text-center mt-md-5 mb-4'>
        <p>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.</p>
        <footer className='blockquote-footer'>Thomas Edison</footer>
      </blockquote>
    </Container>
  );
}

export default About;
