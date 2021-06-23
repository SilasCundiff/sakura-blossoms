import React, { useState } from 'react';
import styled from 'styled-components';
import SelectionBox from './SelectionBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useThemeBuilderContext } from '../../../ThemeBuilderContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { ColorBoxes, FontBoxes } from './BoxList';

import {
  SakuraSeedHueOptions,
  SakuraSeedLightnessOptions,
} from '../../../../../themes/SakuraSeedColorThemes';
import FloatingMessageBox from '../../../../MessageBox/FloatingMessageBox';

const StyledMiniboxMenu = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 9px;
  padding: 8px;
  background: ${(props) => props.theme.colors.primaryHex}FF;
  box-shadow: 5px 8px 10px 3px rgba(23, 23, 23, 0.4);
  color: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  cursor: auto;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform-origin: center;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    top: -8px;
    left: -8px;
    transform: translateX(0);
  }
  & .closeIcon {
    position: absolute;
    right: 8px;
    top: 4px;
  }
  & .title {
    font-size: 19px;
    margin: 4px 8px;
    min-height: 20px;
  }
  & .miniBoxMenuOptions {
    flex: 1 1 100%;
    border-radius: 5px;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    & h4 {
      font-size: 14px;
      margin: 8px 4px 4px;
      font-weight: 500;
    }
    & .selectionBoxesContainer {
      background-color: #fff;
      flex: 1 1 100%;
      margin: 0 4px 2.5%;
      border-radius: 5px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      padding: 4px;
      gap: 4px;
    }
    & .selectionSliderContainer {
      flex: 1 1 50%;
      min-height: 48px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 5px;
      margin: 0 4px 2.5%;
      color: black;
      & h5 {
        margin: 8px auto 0;
        font-family: ${(props) => props.theme.fonts.secondaryFont.font};
        font-weight: 500;
        color: rgba(23, 23, 23, 1);
        font-size: 12px;
        line-height: 0;
        height: 12px;
      }
      & .rc-slider {
        width: 90%;
        margin: auto auto 0 10px;

        &-track {
          background-color: rgba(23, 23, 23, 0.2);
        }
        &-mark {
          display: none;
        }
        &-step {
          display: none;
        }
        &-dot {
          width: 1px;
          height: 1px;
          bottom: 0;
          margin: 0;
          border-color: ${(props) => props.theme.colors.primaryColor};
          background-color: ${(props) => props.theme.colors.secondaryColor};
        }
        &-handle {
          border-color: ${(props) => props.theme.colors.primaryColor};
          background-color: ${(props) => props.theme.colors.secondaryColor};
        }
      }
    }
  }
  & .miniBoxMenuSaveButton {
    flex: 1 1 10%;
    margin: auto 18px;
  }
  & .highlighted {
    border: 2px solid rgba(23, 23, 23, 1);
  }

  ${({ open }) => {
    if (open) {
      return `
        opacity: 1;
        visibility: visible;
        height: 320px;
        width: 220px; 
        & .miniBoxMenuOptions * {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }`;
    }
    if (!open) {
      return `
        opacity: 0;
        visibility: hidden;
        height: 30px;
        width: 30px; & 
        * {
            opacity: 0;
            visibility: hidden;
        }`;
    }
  }}
`;

const MiniboxMenu = ({ closeAllBoxes, open, name, type }) => {
  const initialState = {
    0: { selected: false, boxValue: `${type === 'hue' ? 'gray' : 'Pacifico'}` },
    1: { selected: false, boxValue: `${type === 'hue' ? 'red' : 'Poppins'}` },
    2: { selected: false, boxValue: `${type === 'hue' ? 'orange' : 'Exo'}` },
    3: {
      selected: false,
      boxValue: `${type === 'hue' ? 'yellow' : 'FredokaOne'}`,
    },
    4: {
      selected: false,
      boxValue: `${type === 'hue' ? 'green' : 'Merriweather'}`,
    },
    5: { selected: false, boxValue: `${type === 'hue' ? 'teal' : 'Roboto'}` },
    6: { selected: false, boxValue: `${type === 'hue' ? 'blue' : 'Poppins'}` },
    7: {
      selected: false,
      boxValue: `${type === 'hue' ? 'indigo' : 'Poppins'}`,
    },
    8: {
      selected: false,
      boxValue: `${type === 'hue' ? 'purple' : 'Poppins'}`,
    },
    9: { selected: false, boxValue: `${type === 'hue' ? 'pink' : 'Poppins'}` },
  };

  const { selectedStyles, setSelectedStyles } = useThemeBuilderContext();
  const [value, setvalue] = useState(500);
  const [lightnessError, setlightnessError] = useState({
    errorMessage:
      'Do not set Primary and Secondary lightness values to 100 of each other as it will make some things impossible to see!',
    showErrorMessage: false,
  });

  const [isSelected, setisSelected] = useState(initialState);

  function handleOverride() {
    const { primaryLightness, secondaryLightness } =
      selectedStyles.presetStyles;
    const firstKeyName =
      name.split(`${type === 'hue' ? 'C' : 'F'}`)[0].toLowerCase() +
      type.charAt(0).toUpperCase() +
      type.slice(1);
    const secondKeyName =
      name.split(`${type === 'hue' ? 'C' : 'F'}`)[0].toLowerCase() +
      `${type === 'hue' ? 'Lightness' : 'FontWeight'}`;

    if (secondKeyName === 'primaryLightness') {
      if (
        secondaryLightness === value ||
        secondaryLightness === value + 100 ||
        secondaryLightness === value - 100 ||
        (value === 50 && secondaryLightness === 50)
      ) {
        setlightnessError({ ...lightnessError, showErrorMessage: true });
        setTimeout(() => {
          setlightnessError({ ...lightnessError, showErrorMessage: false });
        }, 5000);
        return;
      }
    }
    if (secondKeyName === 'secondaryLightness') {
      if (
        primaryLightness === value ||
        primaryLightness === value + 100 ||
        primaryLightness === value - 100 ||
        (value === 50 && primaryLightness === 50)
      ) {
        setlightnessError({ ...lightnessError, showErrorMessage: true });
        setTimeout(() => {
          setlightnessError({ ...lightnessError, showErrorMessage: false });
        }, 5000);
        return;
      }
    }

    let newValue;
    Object.keys(isSelected).forEach((index) => {
      const returnedValue = isSelected[index].selected
        ? isSelected[index].boxValue
        : null;
      if (returnedValue) newValue = returnedValue;
    });

    setSelectedStyles({
      ...selectedStyles,
      presetName: 'Custom',
      PresetID: 4,
      presetStyles: {
        ...selectedStyles.presetStyles,
        [firstKeyName]: `${
          newValue ? newValue : selectedStyles.presetStyles[firstKeyName]
        }`,
        [secondKeyName]: value,
      },
    });
  }

  const handleClick = (id) => {
    setisSelected({
      ...initialState,
      [id]: { selected: true, boxValue: initialState[id].boxValue },
    });
  };

  const handleChange = (val) => {
    setvalue(val);
  };

  const handleErrorMessageClick = () => {
    setlightnessError({ ...lightnessError, showErrorMessage: false });
  };

  const listOfColorBoxes = ColorBoxes.map((box) => (
    <SelectionBox
      hue={SakuraSeedHueOptions[box.hue]}
      lightness={SakuraSeedLightnessOptions[value]}
      type={type}
      id={box.id}
      handleClick={handleClick}
      key={`${box.id}${box.hue}`}
      isSelected={isSelected[box.id].selected}
      value={value}
    >
      <div className='letterBox'></div>
    </SelectionBox>
  ));

  const listOfFontBoxes = FontBoxes.map((box) => (
    <SelectionBox
      type={type}
      id={box.id}
      handleClick={handleClick}
      key={`${box.id}${box.hue}`}
      isSelected={isSelected[box.id].selected}
      value={value}
    >
      <div className='letterBox'>
        {box.font.split('')[0]}
        {box.font.split('')[1]}
      </div>
    </SelectionBox>
  ));
  return (
    <StyledMiniboxMenu
      onClick={(e) => {
        e.stopPropagation();
      }}
      open={open}
    >
      <span onClick={closeAllBoxes} className='closeIcon'>
        <FontAwesomeIcon
          className={`nav-control-close`}
          icon={faTimes}
          size='lg'
        />
      </span>
      <h2 className='title'>{name.split('y').join('y ')}</h2>
      <div className='miniBoxMenuOptions'>
        <h4>
          Pick a{' '}
          {name === 'PrimaryColor' || name === 'SecondaryColor'
            ? `Hue`
            : `Font`}
        </h4>
        <div className='selectionBoxesContainer'>
          {type === 'hue' ? listOfColorBoxes : listOfFontBoxes}
        </div>
        <h4>
          Pick a{' '}
          {name === 'PrimaryColor' || name === 'SecondaryColor'
            ? `Lightness`
            : `Font Weight`}
        </h4>
        <div className='selectionSliderContainer'>
          {type === 'hue' ? (
            <Slider
              onChange={handleChange}
              min={50}
              max={900}
              defaultValue={500}
              marks={{
                50: 50,
                100: 100,
                200: 200,
                300: 300,
                400: 400,
                500: 500,
                600: 600,
                700: 700,
                800: 800,
                900: 900,
              }}
              step={null}
            />
          ) : (
            <Slider
              onChange={handleChange}
              min={100}
              max={900}
              defaultValue={500}
              marks={{
                100: 100,
                200: 200,
                300: 300,
                400: 400,
                500: 500,
                600: 600,
                700: 700,
                800: 800,
                900: 900,
              }}
              step={null}
            />
          )}
          <h5>{value}</h5>
        </div>
      </div>
      <FloatingMessageBox
        trigger={lightnessError.showErrorMessage}
        handleErrorMessageClick={handleErrorMessageClick}
      >
        {lightnessError.errorMessage}
      </FloatingMessageBox>

      <button className='miniBoxMenuSaveButton' onClick={handleOverride}>
        Save
      </button>
    </StyledMiniboxMenu>
  );
};

export default MiniboxMenu;
