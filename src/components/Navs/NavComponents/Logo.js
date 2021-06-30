import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  flex: 1 1 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.secondaryColor};
  /* background: black; */
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  font-size: 22px;
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export { Logo };
