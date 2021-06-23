import React, { useState } from 'react';
import styled from 'styled-components';
import MiniDisplayBox from './MiniDisplayBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { useThemeBuilderContext } from '../../ThemeBuilderContext';
const StyledOverrideBox = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 4px 0;

  & h3 {
    font-size: 20px;
    margin: 8px auto 0;
  }
  & .overridesContainer {
    width: 100%;
    flex: 1 1 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      '. . primary  swap  secondary'
      'colors colors box1  swap1  box2'
      'fonts fonts box3  swap2  box4';
    gap: 4px 4px;
    margin-top: 4px;
  }
  & .primary {
    grid-area: primary;
    font-family: ${(props) => props.theme.fonts.primaryFont.font};
    font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  }
  & .secondary {
    grid-area: secondary;
    font-family: ${(props) => props.theme.fonts.secondaryFont.font};
    font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
  }
  & .colors {
    grid-area: colors;
  }
  & .fonts {
    grid-area: fonts;
  }
  & .swap1,
  .swap2 {
    margin: auto;
    font-size: 14px;
    cursor: pointer;
  }
  & .swap1 {
    grid-area: swap1;
  }
  & .swap2 {
    grid-area: swap2;
  }
  & .box1 {
    grid-area: box1;
  }
  & .box2 {
    grid-area: box2;
  }
  & .box3 {
    grid-area: box3;
  }
  & .box4 {
    grid-area: box4;
  }
  & .box1,
  .box2,
  .box3,
  .box4 {
    margin: auto;
  }
  & .colors,
  .fonts {
    font-size: 16px;
    margin: 6px auto auto;
  }
  & .primary,
  .secondary {
    font-size: 14px;
    margin: auto auto 4px;
  }
`;
const PresetsOverrideBox = () => {
  const { selectedStyles, setSelectedStyles } = useThemeBuilderContext();
  const [boxMenuOpen, setboxMenuOpen] = useState({
    PrimaryColorOpen: false,
    SecondaryColorOpen: false,
    PrimaryFontOpen: false,
    SecondaryFontOpen: false,
  });

  const handleClick = (key) => {
    const allBoxMenus = boxMenuOpen;
    Object.keys(allBoxMenus).forEach((v) => (allBoxMenus[v] = false));
    setboxMenuOpen({ ...allBoxMenus, [key]: true });
  };

  const closeAllBoxes = () => {
    setboxMenuOpen({
      PrimaryColorOpen: false,
      SecondaryColorOpen: false,
      PrimaryFontOpen: false,
      SecondaryFontOpen: false,
    });
  };
  const handleColorSwap = () => {
    const tempPrimaryHue = selectedStyles.presetStyles.primaryHue;
    const tempPrimaryLightness = selectedStyles.presetStyles.primaryLightness;
    const tempSecondaryHue = selectedStyles.presetStyles.secondaryHue;
    const tempSecondaryLightness =
      selectedStyles.presetStyles.secondaryLightness;

    setSelectedStyles({
      ...selectedStyles,
      presetName: 'Custom',
      PresetID: 4,
      presetStyles: {
        ...selectedStyles.presetStyles,
        primaryHue: `${tempSecondaryHue}`,
        primaryLightness: tempSecondaryLightness,
        secondaryHue: `${tempPrimaryHue}`,
        secondaryLightness: tempPrimaryLightness,
      },
    });
  };
  const handleFontSwap = () => {
    const tempPrimaryFont = selectedStyles.presetStyles.primaryFont;
    const tempPrimaryFontWeight = selectedStyles.presetStyles.primaryFontWeight;
    const tempSecondaryFont = selectedStyles.presetStyles.secondaryFont;
    const tempSecondaryFontWeight =
      selectedStyles.presetStyles.secondaryFontWeight;

    setSelectedStyles({
      ...selectedStyles,
      presetName: 'Custom',
      PresetID: 4,
      presetStyles: {
        ...selectedStyles.presetStyles,
        primaryFont: `${tempSecondaryFont}`,
        primaryFontWeight: tempSecondaryFontWeight,
        secondaryFont: `${tempPrimaryFont}`,
        secondaryFontWeight: tempPrimaryFontWeight,
      },
    });
  };

  return (
    <StyledOverrideBox>
      <h3>Preset Overrides</h3>
      <div className='overridesContainer'>
        <h5 className='primary'>Primary</h5>
        <h5 className='secondary'>Secondary</h5>
        <h5 className='colors'>Colors</h5>
        <h5 className='fonts'>Fonts</h5>

        <FontAwesomeIcon
          className={`swap1`}
          icon={faRandom}
          size='lg'
          onClick={handleColorSwap}
        />
        <FontAwesomeIcon
          className={`swap2`}
          icon={faRandom}
          size='lg'
          onClick={handleFontSwap}
        />
        <MiniDisplayBox
          handleClick={() => handleClick('PrimaryColorOpen')}
          open={boxMenuOpen.PrimaryColorOpen}
          closeAllBoxes={closeAllBoxes}
          className='box1'
          name='PrimaryColor'
          type='hue'
        >
          Pc
        </MiniDisplayBox>
        <MiniDisplayBox
          handleClick={() => handleClick('SecondaryColorOpen')}
          open={boxMenuOpen.SecondaryColorOpen}
          closeAllBoxes={closeAllBoxes}
          className='box2'
          name='SecondaryColor'
          id='Sc'
          key='Sc'
          type='hue'
        >
          Sc
        </MiniDisplayBox>
        <MiniDisplayBox
          handleClick={() => handleClick('PrimaryFontOpen')}
          open={boxMenuOpen.PrimaryFontOpen}
          closeAllBoxes={closeAllBoxes}
          className='box3'
          name='PrimaryFont'
          id='Pf'
          key='Pf'
          type='font'
        >
          Pf
        </MiniDisplayBox>
        <MiniDisplayBox
          handleClick={() => handleClick('SecondaryFontOpen')}
          open={boxMenuOpen.SecondaryFontOpen}
          closeAllBoxes={closeAllBoxes}
          className='box4'
          name='SecondaryFont'
          id='Sf'
          key='Sf'
          type='font'
        >
          Sf
        </MiniDisplayBox>
      </div>
    </StyledOverrideBox>
  );
};

export default PresetsOverrideBox;
