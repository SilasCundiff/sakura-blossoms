import React from 'react';
import styled from 'styled-components';
import MiniboxMenu from './MiniboxMenu/MiniboxMenu';

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
`;

const MiniDisplayBox = ({
  children,
  className,
  name,
  handleClick,
  open,
  closeAllBoxes,
  type,
}) => {
  return (
    <StyledMiniDisplayBox className={className} onClick={handleClick}>
      {children}
      <MiniboxMenu
        name={name}
        onClick={handleClick}
        open={open}
        closeAllBoxes={closeAllBoxes}
        type={type}
      />
    </StyledMiniDisplayBox>
  );
};

export default MiniDisplayBox;
