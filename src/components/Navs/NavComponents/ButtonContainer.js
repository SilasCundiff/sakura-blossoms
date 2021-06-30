import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0;
  min-height: fit-content;
  /* background: #fff; */
  & button {
    margin: auto;
  }
`;

const ButtonContainer = ({ children }) => {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
};

export { ButtonContainer };
