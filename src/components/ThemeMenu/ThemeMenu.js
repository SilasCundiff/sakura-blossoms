import React from 'react';
// import {
//   SakuraSeedHueOptions,
//   SakuraSeedLightnessOptions,
// } from '../../themes/SakuraSeedColorThemes';
// import {
//   SakuraSeedPrimaryFontFace,
//   SakuraSeedPrimaryFontWeights,
// } from '../../themes/SakuraSeedFontThemes';
import { useThemeBuilderContext } from '../ThemeBuilderContext';
const ThemeMenu = () => {
  const { selectedStyles, setSelectedStyles } = useThemeBuilderContext();
  const { primaryHue, primaryLightness, secondaryHue, secondaryLightness } =
    selectedStyles;
  const handleChange = (e) => {
    console.log(`e`, e.target.name);
    setSelectedStyles({
      ...selectedStyles,
      [e.target.name]: `${e.target.value}`,
    });
  };
  return (
    <div>
      <div className='primaryColor'>
        <select
          value={primaryHue}
          onChange={handleChange}
          name='primaryHue'
          id='primaryHue'
        >
          <option value='gray'>gray</option>
          <option value='red'>red</option>
          <option value='orange'>orange</option>
          <option value='yellow'>yellow</option>
          <option value='green'>green</option>
          <option value='teal'>teal</option>
          <option value='blue'>blue</option>
          <option value='indigo'>indigo</option>
          <option value='purple'>purple</option>
          <option value='pink'>pink</option>
        </select>
        <select
          value={primaryLightness}
          onChange={handleChange}
          name='primaryLightness'
          id='primaryLightness'
        >
          <option value='50'>50</option>
          <option value='100'>100</option>
          <option value='200'>200</option>
          <option value='300'>300</option>
          <option value='400'>400</option>
          <option value='500'>500</option>
          <option value='600'>600</option>
          <option value='700'>700</option>
          <option value='800'>800</option>
          <option value='900'>900</option>
        </select>
      </div>
      <div className='secondaryColor'>
        <select
          value={secondaryHue}
          onChange={handleChange}
          name='secondaryHue'
          id='secondaryHue'
        >
          <option value='gray'>gray</option>
          <option value='red'>red</option>
          <option value='orange'>orange</option>
          <option value='yellow'>yellow</option>
          <option value='green'>green</option>
          <option value='teal'>teal</option>
          <option value='blue'>blue</option>
          <option value='indigo'>indigo</option>
          <option value='purple'>purple</option>
          <option value='pink'>pink</option>
        </select>
        <select
          value={secondaryLightness}
          onChange={handleChange}
          name='secondaryLightness'
          id='secondaryLightness'
        >
          <option value='50'>50</option>
          <option value='100'>100</option>
          <option value='200'>200</option>
          <option value='300'>300</option>
          <option value='400'>400</option>
          <option value='500'>500</option>
          <option value='600'>600</option>
          <option value='700'>700</option>
          <option value='800'>800</option>
          <option value='900'>900</option>
        </select>
      </div>
    </div>
  );
};
export { ThemeMenu };
