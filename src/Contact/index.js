import React from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedinIn, faGithub, faCodepen, faEnvelope);

function Resume() {
  return (
    <Container id='contact' className='bg-primary' fluid>
      <div className='space-filler'/>
      <h1 className='display-3 text-secondary text-center text-md-left mb-4 mb-md-5'>Contact</h1>
      <Row>
        <Col sm='12' md='6' className='mb-5'>
          <Form className='text-info' action='https://formspree.io/kring.vonlehe@gmail.com' method='POST' >
            <FormGroup>
              <Label for='emailInput'>Email</Label>
              <Input type='email' name='email' id='emailInput' bsSize='lg' className='bg-dark text-info' placeholder='Email'/>
            </FormGroup>
            <FormGroup>
              <Label for='nameInput'>Name</Label>
              <Input type='name' name='name' id='nameInput' bsSize='lg' className='bg-dark text-info' placeholder='Name'/>
            </FormGroup>
            <FormGroup>
              <Label for='messageInput'>Text Area</Label>
              <Input type='textarea' name='message' id='messageInput' bsSize='lg' className='bg-dark text-info' placeholder='Message'/>
            </FormGroup>
            <Button color='info' outline block>Submit</Button>
          </Form>
        </Col>
        <Col sm='12' md='6'>
          <h2 className='text-secondary text-center mb-5'>Or you can reach me at</h2>
          <Container>
            <Row className='mb-5 justify-content-center'>
              <FontAwesomeIcon className='contact-icon' icon={['fab', 'linkedin-in']}/>
              <h4 className='text-secondary mt-3 ml-5'><a href='https://www.linkedin.com/in/christian-von-lehe/' target='_blank' rel='noopener noreferrer' className='contact-link'>Linkedin</a></h4>
            </Row>
            <Row className='mb-5 justify-content-center'>
              <FontAwesomeIcon className='contact-icon' icon={['fab', 'github']}/>
              <h4 className='text-secondary mt-3 ml-5'><a href='https://github.com/kring121' target='_blank' rel='noopener noreferrer' className='contact-link'>Github</a></h4>
            </Row>
            <Row className='mb-5 justify-content-center'>
              <FontAwesomeIcon className='contact-icon' icon={['fab', 'codepen']}/>
              <h4 className='text-secondary mt-3 ml-5'><a href='https://codepen.io/kring121/' target='_blank' rel='noopener noreferrer' className='contact-link'>Codepen</a></h4>
            </Row>
            <Row className='mb-5 justify-content-center'>
              <FontAwesomeIcon className='contact-icon' icon='envelope'/>
              <h4 className='mt-3 ml-5'><a href='mailto:kring.vonlehe@gmail.com' target='_blank' rel='noopener noreferrer' className='contact-link'>Email</a></h4>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
