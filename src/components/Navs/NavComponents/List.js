import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  flex: 1 1 80%;
  width: 100%;
  max-height: 75%;
  margin: auto 0 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  /* background: ${(props) => props.theme.colors.primaryColor}; */
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
`;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export { List };
