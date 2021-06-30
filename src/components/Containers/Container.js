import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: inherit;
  padding: 8px;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `max-width: 640px;`;
      case 'md':
        return `max-width: 768px;`;
      case 'lg':
        return `max-width: 1024px;`;
      case 'xl':
        return `max-width: 1280px;`;
      default:
        return `width: 100%`;
    }
  }}
`;

function Container({ children, size = '', className, id }) {
  return (
    <StyledContainer size={size} className={className} id={id}>
      {children}
    </StyledContainer>
  );
}

export default Container;
