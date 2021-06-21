import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.hue
      ? `hsl(${props.hue}, ${props.lightness})`
      : props.theme.colors.primaryColor};

  color: ${(props) =>
    props.hue
      ? `hsl(${props.hue}, ${
          props.value <= 500
            ? props.value === 500
              ? '100%'
              : `${props.value / 10 - 10}%`
            : `${props.value / 10 + 10}%`
        })`
      : props.theme.colors.secondaryColor};
  display: flex;
  & .letterBox {
    margin: auto;
  }
`;

const SelectionBox = ({
  children,
  hue,
  lightness,
  handleClick,
  id,
  isSelected,
  value,
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
      value={value}
    >
      {children}
    </StyledBox>
  );
};

export default SelectionBox;
