import React, { Component } from 'react';
import './style.css';
import { Button, Jumbotron, Container, Tooltip } from 'reactstrap';

class MainHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ripples: [],
      tooltipOpen: {
        passion: false,
        technology: false,
        creativity: false
      }
    }
    this.createRipple = this.createRipple.bind(this);
    this.removeRipple = this.removeRipple.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  createRipple(e) {
    const random = (min, max) => Math.random() * (max - min) + min;
    const top = e.clientY;
    const left = e.clientX;
    const timestamp = Date.now();
    const size = random(100, 300);

    const rippleObj = {
      top,
      left,
      timestamp,
      size
    };

    this.setState(prevState =>({
      ripples: [...prevState.ripples, rippleObj]
    }));

    setTimeout(this.removeRipple, 8000);
  }

  removeRipple() {
    this.setState(state => {
      const [first, ...rest] = state.ripples;

      return {
        ripples: rest
      };

    });
  }

  toggle(e) {
    const hovered = e.target.innerHTML;
    const { tooltipOpen } = this.state;

    if(tooltipOpen.passion === true || tooltipOpen.technology === true) {
      this.setState({
        tooltipOpen: {
          passion: false,
          technology: false,
          creativity: false
        }
      })
    } else {
      this.setState({
        tooltipOpen: {
          passion: hovered === 'passion' ? true : false,
          technology: hovered === 'technology' ? true : false,
          creativity: hovered === 'creativity' ? true : false
        }
      })
    }
  }

  render() {
    const { ripples, tooltipOpen } = this.state;
    return (
      <Jumbotron className='main-hero bg-primary' id='home' onClick={this.createRipple}>
        <Container className='mt-5' id='home-container'>
          <h1 className='display-4 mb-3 text-secondary'>Christian von Lehe</h1>
          <h2 className='text-info mb-4'>Fullstack Web Developer</h2>
          <p className='text-secondary lead'>Where <span className='text-info' id='passion'>passion</span>, <span className='text-info' id='technology'>technology</span> and <span className='text-info' id='creativity'>creativity</span> meet.</p>
          <Tooltip innerClassName='bg-secondary text-left' placement='bottom' isOpen={tooltipOpen.passion} target='passion' toggle={this.toggle}>
            <span className='lead'>passion</span> <span className='font-italic'>noun</span>
            <br/>
            /ˈpaSHən/
            <br/>
            an intense desire or enthusiasm for something.
          </Tooltip>
          <Tooltip innerClassName='bg-secondary text-left' placement='bottom' isOpen={tooltipOpen.technology} target='technology' toggle={this.toggle}>
            <span className='lead'>technology</span> <span className='font-italic'>noun</span>
            <br/>
            /tekˈnäləjē/
            <br/>
            the application of scientific knowledge for practical purposes, especially in industry.
          </Tooltip>
          <Tooltip innerClassName='bg-secondary text-left' placement='bottom' isOpen={tooltipOpen.creativity} target='creativity' toggle={this.toggle}>
            <span className='lead'>creativity</span> <span className='font-italic'>noun</span>
            <br/>
            /ˌkrēāˈtivədē/
            <br/>
            the use of the imagination or original ideas, especially in the production of an artistic work.
          </Tooltip>
          <Button className='mt-5 learnmore-btn' outline color='secondary' href='#about'>Learn more</Button>
          {ripples.map(ripple => {
            return (
            <div key={ripple.timestamp}>
              <span className='ripple r1' style={{top: ripple.top, left: ripple.left, width: ripple.size, height: ripple.size}}/>
              <span className='ripple r2' style={{top: ripple.top, left: ripple.left, width: ripple.size, height: ripple.size}}/>
              <span className='ripple r3' style={{top: ripple.top, left: ripple.left, width: ripple.size, height: ripple.size}}/>
              <span className='ripple r4' style={{top: ripple.top, left: ripple.left, width: ripple.size, height: ripple.size}}/>
              <span className='ripple r5' style={{top: ripple.top, left: ripple.left, width: ripple.size, height: ripple.size}}/>
            </div>
            )
          }
          )}
        </Container>
      </Jumbotron>
    );
  }
}

export default MainHero;
