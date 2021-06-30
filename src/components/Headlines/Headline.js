import React from 'react';
import styled from 'styled-components';
import { MainText, SubText, CTA } from './HeadlineComponents';

const StyledHeadline = styled.div`
  padding: 16px;
  margin: 0;
`;

function Headline({ children }) {
  return <StyledHeadline>{children}</StyledHeadline>;
}

Headline.Maintext = MainText;
Headline.Subtext = SubText;
Headline.CTA = CTA;

export default Headline;
