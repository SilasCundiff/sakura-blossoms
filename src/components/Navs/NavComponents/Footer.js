import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  flex: 1 1 10%;
  width: 100%;
  /* height: 100%; */
  height: fit-content;
  margin-top: auto;
  color: ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export { Footer };
