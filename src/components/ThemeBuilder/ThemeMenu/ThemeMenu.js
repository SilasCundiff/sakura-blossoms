import React from 'react';
import styled from 'styled-components';
import Select from './Select/Select';
import { useThemeBuilderContext } from '../ThemeBuilderContext';

const StyledThemeMenu = styled.div`
  height: 200px;
  width: 200px;
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
  & .presetSelect {
    display: flex;
    outline: 1px solid ${(props) => props.theme.colors.secondaryColor};
  }
  & .presetOverridesBox {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    padding: 4px 4px 0;
    & h3 {
      font-size: 20px;
      margin: auto;
    }
    & .colorOverridesBox,
    .fontOverridesBox {
      width: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      & span {
        margin-right: auto;
        margin-left: 8px;
        font-size: 20px;
      }
      & .miniDisplayBox {
        height: 30px;
        width: 30px;
        border-radius: 3px;
        border: 1px solid ${(props) => props.theme.colors.secondaryColor};
        margin-right: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${(props) => props.theme.fonts.primaryFont.font};
        font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
        cursor: pointer;
      }
      & .miniColorBox1 {
        font-family: ${(props) => props.theme.fonts.secondaryFont.font};
        font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
        background: ${(props) => props.theme.colors.primaryColor};
        color: ${(props) => props.theme.colors.secondaryColor};
      }
      & .miniColorBox2 {
        background: ${(props) => props.theme.colors.secondaryColor};
        color: ${(props) => props.theme.colors.primaryColor};
      }

      & .miniFontBox2 {
        font-family: ${(props) => props.theme.fonts.secondaryFont.font};
        font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
        background: ${(props) => props.theme.colors.secondaryColor};
        color: ${(props) => props.theme.colors.primaryColor};
      }
    }
  }
`;

const ThemeMenu = () => {
  const { selectedStyles, setSelectedStyles } = useThemeBuilderContext();
  // const { primaryHue, primaryLightness, secondaryHue, secondaryLightness } =
  //   selectedStyles.presetStyles;
  console.log(`selectedStyles`, selectedStyles);
  return (
    <StyledThemeMenu>
      <div className='title'>
        <h2>Preset Select</h2>
      </div>
      <div className='presetSelect'>
        <Select />
      </div>
      <div className='presetOverridesBox'>
        <h3>Preset Overrides</h3>
        <div className='colorOverridesBox'>
          <span>Colors</span>
          <div className='miniDisplayBox miniColorBox1'>Pc</div>
          <div className='miniDisplayBox miniColorBox2'>Sc</div>
        </div>
        <div className='fontOverridesBox'>
          <span>Fonts</span>
          <div className='miniDisplayBox miniFontBox1'>Aa</div>
          <div className='miniDisplayBox miniFontBox2'>Aa</div>
        </div>
      </div>
    </StyledThemeMenu>
  );
};
export { ThemeMenu };
