import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;
  border-radius: 5px;
  background-color: ${(props) =>
    props.hue
      ? `hsl(${props.hue}, ${props.lightness})`
      : props.theme.colors.primaryColor};
  /* background-color: hsl(${(props) => props.hue}, ${(props) =>
    props.lightness}); */
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(23, 23, 23, 0.8);
  display: flex;
  & .letterBox {
    margin: auto;
  }
`;
// const StyledFontBox = styled.div`
//   height: 30px;
//   width: 30px;
//   margin: auto;
//   border-radius: 5px;
//   background-color: ${(props) => props.theme.colors.primaryColor};
//   color: ${(props) => props.theme.colors.secondaryColor};
//   display: flex;
//   & .letterBox {
//     margin: auto;
//   }
// `;
const SelectionBox = ({
  children,
  hue,
  lightness,
  font,
  weight,
  type,
  handleClick,
  id,
  isSelected,
}) => {
  const [isHighlighted, setisHighlighted] = useState(false);

  useEffect(() => {
    if (isSelected) {
      setisHighlighted(true);
    }
    if (!isSelected) {
      setisHighlighted(false);
    }
  }, [isSelected, id, isHighlighted]);

  return (
    <StyledBox
      hue={hue}
      lightness={lightness}
      onClick={() => {
        handleClick(id);
      }}
      className={`${isHighlighted ? 'highlighted' : ''}`}
    >
      {children}
    </StyledBox>
  );
};

export default SelectionBox;
