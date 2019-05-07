import React, {Component} from 'react';
import MainHero from './MainHero';
import CustomNav from './CustomNav';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MainHero/>
        <CustomNav/>
        <About/>
        <Portfolio/>
        <Resume/>
        <Contact/>
      </div>
    );
  }
}

export default App;
