import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ButtonContainer,
  Control,
  Footer,
  ItemContainer,
  List,
  ListItem,
  Logo,
} from './NavComponents';
import { NavProvider } from './NavContext';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.primaryColor};
  position: fixed;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transition: all 0.5s;
  clip-path: ${(props) =>
    props.navOpen
      ? 'circle(300% at 100% 0%)'
      : 'circle(20px at calc(100% - 31.5px) calc(0% + 23.5px) )'};
  overflow: hidden;
`;

const Nav = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);

  const handleNavToggle = () => {
    setnavOpen(!navOpen);
  };

  const handleCloseNav = () => {
    setnavOpen(false);
  };

  return (
    <NavProvider value={{ navOpen, handleNavToggle, handleCloseNav }}>
      <StyledNav navOpen={navOpen}>{children}</StyledNav>
    </NavProvider>
  );
};

Nav.Control = Control;
Nav.Logo = Logo;
Nav.List = List;
Nav.ListItem = ListItem;
Nav.ItemContainer = ItemContainer;
Nav.ButtonContainer = ButtonContainer;
Nav.Footer = Footer;

export default Nav;
