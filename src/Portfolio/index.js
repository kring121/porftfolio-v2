import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardText } from 'reactstrap';

function Portfolio() {
  return (
    <Container id='portfolio' className='bg-primary' fluid>
      <div className='space-filler'/>
      <h1 id='portfolio-title' className='display-3 text-secondary text-center text-md-left mb-4 mb-md-5'>Portfolio</h1>
      <Row>
        <Col sm='12' lg='4 mb-4'>
          <Card id='devbook' className='portfolio-card'>
            <CardBody>
              <h4 className='card-title text-primary'>Devbook</h4>
              <CardText>React, Postgres, Sequelize, JWT & Express</CardText>
              <Button href='https://glacial-garden-70284.herokuapp.com/#/' target='_blank' rel='noopener noreferrer' className='portfolio-btn' color='info'>View Site</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' lg='4 mb-4'>
          <Card id='geoinfo' className='portfolio-card'>
            <CardBody>
              <h4 className='card-title text-primary'>GeoInfo</h4>
              <CardText>HTML, CSS, JavaScript/AJAX, Restcountries & Leaflet</CardText>
              <Button href='https://geoinfo.netlify.com/' target='_blank' rel='noopener noreferrer' className='portfolio-btn' color='info'>View Site</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' lg='4 mb-4'>
          <Card id='job-tracker' className='portfolio-card'>
            <CardBody>
              <h4 className='card-title text-primary'>Job Tracker</h4>
              <CardText>HTML, CSS, JavaScript and Materialize design</CardText>
              <Button href='https://kring121.github.io/job-tracker/' target='_blank' rel='noopener noreferrer' className='portfolio-btn' color='info'>View Site</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' lg='4 mb-4'>
          <Card id='comet' className='portfolio-card'>
            <CardBody>
              <h4 className='card-title text-primary'>Comet Animations</h4>
              <CardText>React</CardText>
              <Button href='https://comet-animations.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='portfolio-btn' color='info'>View Site</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' lg='4 mb-4'>
          <Card id='subway' className='portfolio-card'>
            <CardBody>
              <h4 className='card-title text-primary'>Subway Runner</h4>
              <CardText>HTML,CSS & JavaScript *DESKTOP ONLY*</CardText>
              <Button href='https://pages.git.generalassemb.ly/christianvonlehe/Project1/' target='_blank' rel='noopener noreferrer' className='portfolio-btn' color='info'>View Site</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' lg='4 mb-4'>
          <Card id='marvel' className='portfolio-card'>
            <CardBody>
              <h4 className='card-title text-primary'>Marvel Comic</h4>
              <CardText>React & Marvel's API</CardText>
              <Button href='https://marvel-story.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='portfolio-btn' color='info'>View Site</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
