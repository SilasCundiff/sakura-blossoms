import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHueBox = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;
  border-radius: 5px;
  background-color: hsl(${(props) => props.hue}, ${(props) => props.lightness});
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(23, 23, 23, 0.8);
  display: flex;
  & .letterBox {
    margin: auto;
  }
`;
const StyledFontBox = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.secondaryColor};
  display: flex;
  & .letterBox {
    margin: auto;
  }
`;
const SelectionBox = ({
  children,
  hue,
  lightness,
  font,
  weight,
  type,
  selectedBox,
  handleClick,
  id,
}) => {
  return type === 'hue' ? (
    <StyledHueBox
      hue={hue}
      lightness={lightness}
      onClick={() => {
        handleClick(id);
      }}
      className={`${selectedBox ? 'highlighted' : ''}`}
    >
      {children}
    </StyledHueBox>
  ) : (
    <StyledFontBox
      font={font}
      weight={weight}
      onClick={() => {
        handleClick(id);
      }}
      className={`${selectedBox ? 'highlighted' : ''}`}
    >
      {children}
    </StyledFontBox>
  );
};

export default SelectionBox;
