import React from 'react';
import styled from 'styled-components';

const StyledSubText = styled.div`
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
  color: ${(props) => props.theme.colors.primaryColor};
  /* background: ${(props) => props.theme.colors.secondaryColor}; */
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 4px;
  margin-top: 16px;
`;

function SubText({ children }) {
  return <StyledSubText>{children}</StyledSubText>;
}

export { SubText };
