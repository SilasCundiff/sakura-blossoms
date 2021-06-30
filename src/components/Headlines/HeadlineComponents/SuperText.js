import React from 'react';
import styled from 'styled-components';

const StyledSuperText = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  color: ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.secondaryColor};
`;

function SuperText({ children }) {
  return (
    <StyledSuperText>
      <span>{children}</span>
    </StyledSuperText>
  );
}

export { SuperText };
