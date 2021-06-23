import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './Select/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PresetsOverrideBox from './PresetsOverrideBox/PresetsOverrideBox';
const StyledThemeMenu = styled.div`
  height: 280px;
  width: 250px;
  position: fixed;
  top: 8px;
  left: ${(props) => (props.ThemeMenuOpen ? '8px' : '-260px')};
  border-radius: 9px;
  box-shadow: 5px 8px 7px 4px rgba(23, 23, 23, 0.4);
  padding: 8px;
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
  display: flex;
  flex-direction: column;
  z-index: 100000;
  transition: left 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  & .title {
    min-height: 40px;
    display: flex;
    margin-bottom: 4px;
    & h2 {
      font-family: ${(props) => props.theme.fonts.primaryFont.font};
      font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
      font-size: 24px;
      margin: 0 auto auto;
    }
  }
  & .themeMenuToggler {
    position: absolute;
    right: ${(props) => (props.ThemeMenuOpen ? '12px' : '-36px')};
    transform: ${(props) =>
      props.ThemeMenuOpen ? 'rotate(180deg)' : 'rotate(0)'};
    top: 8px;
    color: ${(props) =>
      props.ThemeMenuOpen
        ? props.theme.colors.secondaryColor
        : props.theme.colors.primaryColor};
    transition: ${(props) =>
      props.ThemeMenuOpen ? 'all .1s .1s' : 'all 0.5s .75s'};
  }
`;

const ThemeMenu = () => {
  const [ThemeMenuOpen, setThemeMenuOpen] = useState(false);

  const handleClick = () => {
    setThemeMenuOpen(!ThemeMenuOpen);
  };
  return (
    <StyledThemeMenu ThemeMenuOpen={ThemeMenuOpen}>
      <div className='title'>
        <h2>Preset Select</h2>
      </div>
      <div className='presetSelect'>
        <Select classNamePrefix={'Select'} />
      </div>
      <PresetsOverrideBox />
      <div className='themeMenuToggler' onClick={handleClick}>
        <FontAwesomeIcon className={`swap1`} icon={faChevronRight} size='lg' />
      </div>
    </StyledThemeMenu>
  );
};
export { ThemeMenu };
