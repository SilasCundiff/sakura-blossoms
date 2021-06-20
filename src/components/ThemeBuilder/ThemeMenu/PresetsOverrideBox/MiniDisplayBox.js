import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMiniDisplayBox = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  margin-right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  cursor: pointer;
  box-shadow: 0px 2px 4px 2px rgba(23, 23, 23, 0.3);
  position: relative;
  & .miniBoxMenu {
    position: absolute;
    top: -8px;
    left: -8px;
    border-radius: 9px;
    padding: 8px;
    background: ${(props) => props.theme.colors.primaryHex}F0;
    color: ${(props) => props.theme.colors.secondaryColor};
    font-family: ${(props) => props.theme.fonts.secondaryFont.font};
    font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
    cursor: auto;
    z-index: 10;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform-origin: center;

    /* pointer-events: none; */
  }
  .open {
    opacity: 1;
    visibility: visible;
    height: 180px;
    width: 220px;
  }
  .closed {
    opacity: 0;
    visibility: hidden;
    height: 30px;
    width: 30px;
  }
`;

const MiniDisplayBox = ({
  children,
  className,
  name,
  handleClick,
  open,
  closeAllBoxes,
}) => {
  return (
    <StyledMiniDisplayBox
      className={className}
      name={name}
      onClick={handleClick}
      open={open}
    >
      {children}
      {(name === 'PrimaryColor' || name === 'SecondaryColor') && (
        <div
          onBlur={handleClick}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`miniBoxMenu colorMenu ${open ? 'open' : 'closed'}`}
        >
          <span onClick={closeAllBoxes}>close</span>
        </div>
      )}
      {(name === 'PrimaryFont' || name === 'SecondaryFont') && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`miniBoxMenu fontMenu ${open ? 'open' : 'closed'}`}
        >
          <span onClick={closeAllBoxes}>close</span>
        </div>
      )}
    </StyledMiniDisplayBox>
  );
};

export default MiniDisplayBox;
