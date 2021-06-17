import React from 'react';
import Nav from './Nav';
import Button from '../Buttons/Button';

const NavBar = () => {
  return (
    <Nav>
      <Nav.Control />
      <Nav.Logo>SakuraSeeds</Nav.Logo>
      <Nav.List>
        <Nav.ItemContainer>
          <Nav.ListItem>Home</Nav.ListItem>
          <Nav.ListItem>Work</Nav.ListItem>
          <Nav.ListItem>About</Nav.ListItem>
          <Nav.ListItem>Contact</Nav.ListItem>
        </Nav.ItemContainer>
        <Nav.ButtonContainer>
          <Button size={`small`} type={`pill`} inverted={false} ghost={false}>
            Sign In
          </Button>
          <Button size={`small`} type={`pill`} inverted={true} ghost={true}>
            Sign Up
          </Button>
        </Nav.ButtonContainer>
      </Nav.List>
      <Nav.Footer>copyright SakuraSeeds&copy; 2021</Nav.Footer>
    </Nav>
  );
};

export default NavBar;
