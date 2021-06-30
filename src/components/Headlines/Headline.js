import React from 'react';
import styled from 'styled-components';
import { MainText, SubText, CTA } from './HeadlineComponents';

const StyledHeadline = styled.div`
  /* background: rgba(23, 23, 23, 0.3); */
  padding: 16px;
  margin: 0;
  /* width: 300px; */
`;

function Headline({ children }) {
  return <StyledHeadline>{children}</StyledHeadline>;
}

Headline.Maintext = MainText;
Headline.Subtext = SubText;
Headline.CTA = CTA;

export default Headline;
