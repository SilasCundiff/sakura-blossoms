import React from 'react';
import Nav from './Nav';
import Logo from '../Logos/Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Nav>
      <Nav.Control />
      <Nav.Logo>
        <Logo>SakuraSeeds</Logo>
      </Nav.Logo>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2rem',
          background: 'white',
          width: '80%',
        }}
      >
        This nav is WIP and doesn't link to anything yet!
      </div>
      <Nav.List>
        <Nav.ItemContainer>
          <Nav.ListItem>
            <Link to='/'>Home</Link>
          </Nav.ListItem>
          <Nav.ListItem>Info</Nav.ListItem>
          <Nav.ListItem>About</Nav.ListItem>
          <Nav.ListItem>Contact</Nav.ListItem>
        </Nav.ItemContainer>
      </Nav.List>
      <Nav.Footer>copyright SakuraSeeds&copy; 2021</Nav.Footer>
    </Nav>
  );
};

export default NavBar;
