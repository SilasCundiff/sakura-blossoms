import React from 'react';
import styled from 'styled-components';
import Select from './Select/Select';
import PresetsOverrideBox from './PresetsOverrideBox/PresetsOverrideBox';
const StyledThemeMenu = styled.div`
  height: 280px;
  width: 230px;
  position: fixed;
  top: 8px;
  left: 8px;
  border-radius: 9px;
  box-shadow: 5px 8px 7px 4px rgba(23, 23, 23, 0.4);
  padding: 8px;
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
  display: flex;
  flex-direction: column;
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
`;

const ThemeMenu = () => {
  return (
    <StyledThemeMenu>
      <div className='title'>
        <h2>Preset Select</h2>
      </div>
      <div className='presetSelect'>
        <Select classNamePrefix={'Select'} />
      </div>
      <PresetsOverrideBox />
    </StyledThemeMenu>
  );
};
export { ThemeMenu };
