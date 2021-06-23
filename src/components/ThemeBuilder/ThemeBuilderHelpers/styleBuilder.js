import WebFont from 'webfontloader';
import {
  SakuraSeedHueOptions,
  SakuraSeedLightnessOptions,
} from '../../../themes/SakuraSeedColorThemes';
import {
  SakuraSeedPrimaryFontFace,
  SakuraSeedPrimaryFontWeights,
} from '../../../themes/SakuraSeedFontThemes';

const getHueValue = (value) => SakuraSeedHueOptions[value];
const getLightnessValue = (value) => SakuraSeedLightnessOptions[value];
const getFont = (value) => SakuraSeedPrimaryFontFace[value];
const getFontWeight = (value) => SakuraSeedPrimaryFontWeights[value];

// Builds a selection of styles to send to the theme builder
export const styleBuilder = (selectedStyles) => {
  const {
    primaryHue,
    primaryLightness,
    secondaryHue,
    secondaryLightness,
    primaryFont,
    primaryFontWeight,
    secondaryFont,
    secondaryFontWeight,
  } = selectedStyles;
  // Loads font Dynamically to reduce number of http requests on first page load
  fontLoader(
    primaryFont,
    primaryFontWeight,
    secondaryFont,
    secondaryFontWeight
  );

  // Retrieves the value from the select/state (user input) for colors, hues, fonts, and font weights
  const newStyles = {
    primaryHue: getHueValue(primaryHue),
    primaryLightness: getLightnessValue(primaryLightness),
    secondaryHue: getHueValue(secondaryHue),
    secondaryLightness: getLightnessValue(secondaryLightness),
    primaryFont: getFont(primaryFont),
    primaryFontWeight: getFontWeight(primaryFontWeight),
    secondaryFont: getFont(secondaryFont),
    secondaryFontWeight: getFontWeight(secondaryFontWeight),
  };
  return newStyles;
};

//TODO font weights unused
const fontLoader = (
  primaryFont,
  primaryFontWeight,
  secondaryFont,
  secondaryFontWeight
) => {
  // console.log(`primaryFont`, primaryFont);
  // console.log(`secondaryFont`, secondaryFont);
  if (primaryFont === 'FredokaOne') primaryFont = 'Fredoka+One';
  if (secondaryFont === 'FredokaOne') secondaryFont = 'Fredoka+One';

  WebFont.load({
    google: {
      families: [
        primaryFont,
        `${primaryFont}:100,200,300,400,500,600,700,800,900`,
        secondaryFont,
        `${secondaryFont}:100,200,300,400,500,600,700,800,900`,
      ],
    },
  });
};
