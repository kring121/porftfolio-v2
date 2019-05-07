import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';
import Scrollspy from 'react-scrollspy';

class CustomNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.state = {
      isOpen: false,
      activeItem: null
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  setActiveItem(e) {
    const activeItem = e.id;
    this.setState({
      activeItem
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Navbar className='bg-secondary' expand='md'>
        <NavbarBrand/>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Scrollspy className='nav nav-fill' items={['home', 'about', 'portfolio', 'resume', 'contact']} onUpdate={this.setActiveItem} currentClassName='active'>
            <Nav pills fill navbar>
              <NavItem>
                <NavLink href='#home' active={activeItem === 'home'}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#about' active={activeItem === 'about'}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#portfolio' active={activeItem === 'portfolio'}>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#resume' active={activeItem === 'resume'}>Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact' active={activeItem === 'contact'}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Scrollspy>
        </Collapse>
      </Navbar>
    );
  }
}

export default CustomNav;
