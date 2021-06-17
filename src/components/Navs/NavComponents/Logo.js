import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  font-size: 24px;
  /* background: #000; */
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export { Logo };
