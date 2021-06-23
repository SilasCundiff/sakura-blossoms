import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const StyledMessageBox = styled.div`
  position: absolute;
  padding: 16px;
  background-color: rgba(23, 23, 23, 0.9);
  font-size: 14px;
  top: 25%;
  left: 5%;
  color: white;
  border-radius: 5px;
  width: 220px;
  max-height: 600px;
  transition: all 0.75s ease-out;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 18px solid transparent;
    border-top: 30px solid rgba(23, 23, 23, 0.9);
    left: 25%;
    top: 100%;
  }

  & .message-close {
    position: absolute;
    right: 8px;
    top: 4px;
  }
`;

const FloatingMessageBox = ({ children, trigger, handleErrorMessageClick }) => {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    trigger ? setvisible(true) : setvisible(false);
  }, [trigger, setvisible]);

  return (
    <StyledMessageBox visible={visible}>
      <FontAwesomeIcon
        className={`message-close`}
        icon={faTimes}
        size='lg'
        onClick={handleErrorMessageClick}
      />
      {children}
    </StyledMessageBox>
  );
};

export default FloatingMessageBox;
