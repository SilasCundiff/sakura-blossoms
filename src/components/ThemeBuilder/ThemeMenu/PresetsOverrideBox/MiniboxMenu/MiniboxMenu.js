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

const StyledMiniboxMenu = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
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
        height: 300px;
        width: 220px; 
        & * {
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
    0: { selected: false },
    1: { selected: false },
    2: { selected: false },
    3: { selected: false },
    4: { selected: false },
    5: { selected: false },
    6: { selected: false },
    7: { selected: false },
    8: { selected: false },
    9: { selected: false },
  };

  const { selectedStyles, setSelectedStyles } = useThemeBuilderContext();

  const [value, setvalue] = useState(500);
  const [isSelected, setisSelected] = useState(initialState);

  function handleOverride(changes) {
    setSelectedStyles({
      ...selectedStyles,
      presetName: 'Custom',
      PresetID: 4,
      presetStyles: { ...changes },
    });
  }

  const handleClick = (id) => {
    setisSelected({ ...initialState, [id]: { selected: true } });
  };

  const handleChange = (val) => {
    setvalue(val);
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
    >
      <div className='letterBox'>
        {box.hue.split('')[0].toUpperCase()}
        {box.hue.split('')[1].toUpperCase()}
      </div>
    </SelectionBox>
  ));

  // <SelectionBox
  //           hue={SakuraSeedHueOptions.gray}
  //           lightness={SakuraSeedLightnessOptions[value]}
  //           type={type}
  //           id={0}
  //           handleClick={handleClick}
  //           isSelected={isSelected[0].selected}
  //         ></SelectionBox>
  const listOfFontBoxes = FontBoxes.map((box) => (
    <SelectionBox
      type={type}
      id={box.id}
      handleClick={handleClick}
      key={`${box.id}${box.hue}`}
      isSelected={isSelected[box.id].selected}
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
          {/* <SelectionBox
            hue={SakuraSeedHueOptions.gray}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={0}
            handleClick={handleClick}
            isSelected={isSelected[0].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.red}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={1}
            handleClick={handleClick}
            isSelected={isSelected[1].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.orange}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={2}
            handleClick={handleClick}
            isSelected={isSelected[2].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.yellow}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={3}
            handleClick={handleClick}
            isSelected={isSelected[3].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.green}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={4}
            handleClick={handleClick}
            isSelected={isSelected[4].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.teal}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={5}
            handleClick={handleClick}
            isSelected={isSelected[5].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.blue}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={6}
            handleClick={handleClick}
            isSelected={isSelected[6].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.indigo}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={7}
            handleClick={handleClick}
            isSelected={isSelected[7].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.purple}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={8}
            handleClick={handleClick}
            isSelected={isSelected[8].selected}
          ></SelectionBox>
          <SelectionBox
            hue={SakuraSeedHueOptions.pink}
            lightness={SakuraSeedLightnessOptions[value]}
            type={type}
            id={9}
            handleClick={handleClick}
            isSelected={isSelected[9].selected}
          ></SelectionBox> */}
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
      <button className='miniBoxMenuSaveButton' onClick={handleOverride}>
        Save
      </button>
    </StyledMiniboxMenu>
  );
};

export default MiniboxMenu;
