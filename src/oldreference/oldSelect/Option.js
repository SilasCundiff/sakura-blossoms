import React from 'react';
import styled from 'styled-components';

const StyledOption = styled.option`
  &::hover {
    background: #000;
  }
`;

const Option = ({ name, value }) => {
  return <StyledOption value={value}>{name}</StyledOption>;
};

export default Option;
