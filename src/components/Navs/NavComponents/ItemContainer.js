import React from 'react';
import styled from 'styled-components';

const StyledListItemContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 90%;
  width: 100%;
  overflow-y: auto;
  padding: 16px 0;
`;

const ItemContainer = ({ children }) => {
  return <StyledListItemContainer>{children}</StyledListItemContainer>;
};
export { ItemContainer };
