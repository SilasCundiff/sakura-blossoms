import React from 'react';
import styled from 'styled-components';
import Headline from '../Headlines/Headline';
const StyledPlayground = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};

  & h1 {
    line-height: 0;
  }
  & p {
    font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
    margin-bottom: 24px;
  }
  & .sandbox {
    background: #fdf4f4;
    height: 1100px;
    width: 800px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #232323;
    position: relative;
    border: 2px solid #222;
  }
`;

function Playground() {
  return (
    <StyledPlayground className='playground'>
      <h1>This is a component playground</h1>
      <p>use this playground for testing small components</p>
      <div className='sandbox'>
        {(
          <Headline>
            <Headline.CTA>placeholder</Headline.CTA>
            <Headline.Maintext>Grow your dreams.</Headline.Maintext>
            <Headline.Subtext>
              We design beautiful components to build your next website.
            </Headline.Subtext>
          </Headline>
        ) || <h2>Put the component in the sandbox</h2>}
      </div>
    </StyledPlayground>
  );
}

export default Playground;
