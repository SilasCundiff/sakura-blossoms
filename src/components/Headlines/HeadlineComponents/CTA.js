import React from 'react';
import styled from 'styled-components';

const StyledCTA = styled.div`
  margin-top: 16px;
`;

function CTA({ children }) {
  return <StyledCTA>{children}</StyledCTA>;
}

export { CTA };
