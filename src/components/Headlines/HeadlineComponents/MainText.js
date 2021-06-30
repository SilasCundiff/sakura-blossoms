import React from 'react';
import styled from 'styled-components';

const StyledMainText = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  color: ${(props) => props.theme.colors.primaryColor};
  /* background: ${(props) => props.theme.colors.secondaryColor}; */
  & h1 {
    margin: 0;
    font-size: 48px;
    line-height: ${({ theme: { fonts } }) =>
      fonts.primaryFont.font === 'Pacifico' ? '78px' : '58px'};
    letter-spacing: 3px;
  }
`;

function MainText({ children }) {
  return (
    <StyledMainText>
      <h1>{children}</h1>
    </StyledMainText>
  );
}

export { MainText };
