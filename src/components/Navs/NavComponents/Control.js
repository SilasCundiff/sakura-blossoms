import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavContext } from '../NavContext';

const StyledNavControl = styled.div`
  position: absolute;
  top: 7px;
  right: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  padding: 24px;
  cursor: pointer;
  /* background: #000; */

  border-radius: 50%;
  z-index: 1000;
  color: ${(props) => props.theme.colors.primaryColor};
  .nav-control-open,
  .nav-control-close {
    position: absolute;
    transition: all 0.5s;
  }
  & .icon-show {
    opacity: 1;
    visibility: visible;
    transform: rotate(360deg);
  }
  & .icon-hide {
    opacity: 0;
    visibility: hidden;
  }
`;

const Control = () => {
  const { navOpen, handleNavToggle } = useNavContext();
  return (
    <StyledNavControl onClick={handleNavToggle}>
      <FontAwesomeIcon
        className={`nav-control-close ${navOpen ? 'icon-show' : 'icon-hide'}`}
        icon={faTimes}
        size='lg'
      />
      <FontAwesomeIcon
        className={`nav-control-open ${navOpen ? 'icon-hide' : 'icon-show'}`}
        icon={faBars}
        size='lg'
      />
    </StyledNavControl>
  );
};

export { Control };
