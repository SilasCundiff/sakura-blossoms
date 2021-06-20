import React from 'react';
import styled from 'styled-components';
import Select from './Select/Select';
import PresetsOverrideBox from './PresetsOverrideBox/PresetsOverrideBox';
const StyledThemeMenu = styled.div`
  height: 250px;
  width: 220px;
  position: fixed;
  top: 8px;
  left: 8px;
  border-radius: 9px;
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
