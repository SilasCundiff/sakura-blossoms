import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  height: 20rem;
  color: ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
`;

function Footer({ children, className }) {
  return <StyledFooter className={className}>{children}</StyledFooter>;
}

export default Footer;
