import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px 0;
  flex-wrap: wrap;
  & button {
    margin: auto;
    flex: 0 0 35%;
  }
`;

const ButtonContainer = ({ children }) => {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
};

export { ButtonContainer };
