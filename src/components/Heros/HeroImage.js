import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useThemeBuilderContext } from '../ThemeBuilder/ThemeBuilderContext';
import { heroImageURLList } from './HeroImageList';

const StyledHeroImage = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  z-index: -1;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: 100vw;
  background-position: center;
`;

function HeroImage() {
  const [imageURL, setImageURL] = useState('');
  const {
    selectedStyles: {
      presetStyles: { primaryHue },
    },
  } = useThemeBuilderContext();

  useEffect(() => {
    const URL = heroImageURLList.filter((image) => {
      return primaryHue === image.color ? image.URL : '';
    });
    if (URL !== '') {
      setImageURL(URL[0].URL);
    }
  }, [primaryHue]);
  console.log(`imageURL`, imageURL);
  return <StyledHeroImage backgroundImage={`${imageURL}`}></StyledHeroImage>;
}

export default HeroImage;
