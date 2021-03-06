import React from 'react';
import styled from 'styled-components';

const RectangleButton = styled.button`
  background: inherit;
  color: inherit;
  background: ${({
    ghost,
    inverted,
    theme: {
      colors: { primaryColor, secondaryColor },
    },
  }) => (ghost ? 'transparent' : inverted ? primaryColor : secondaryColor)};
  /* Manual Background color theme override */
  background: ${({
    ghost,
    inverted,
    theme: {
      colors: { primaryColor, secondaryColor },
    },
  }) => (ghost ? 'transparent' : inverted ? primaryColor : secondaryColor)};
  color: ${({
    inverted,
    theme: {
      colors: { primaryColor, secondaryColor },
    },
  }) => (inverted ? secondaryColor : primaryColor)};
  /* Manual Background color theme override */
  color: ${(props) =>
    props.inverted ? props.secondaryColor : props.primaryColor};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.theme.colors.secondaryColor}`
        : `5px solid ${props.theme.colors.primaryColor}`
      : `none`};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.secondaryColor}`
        : `5px solid ${props.primaryColor}`
      : `none`};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  max-width: fit-content;
  min-width: fit-content;
  max-height: fit-content;
  min-height: fit-content;
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  & a {
    text-decoration: none;
    color: inherit;
  }
  ${({ size }) => {
    if (size === 'small') return `font-size: 12px;  padding: 12px 20px;`;
    if (size === 'regular') return `font-size: 16px;  padding: 12px 24px;`;
    if (size === 'medium') return `font-size: 24px;  padding: 15px 28px;`;
    if (size === 'large') return `font-size: 30px;  padding: 15px 32px;`;
  }}
`;

const PillButton = styled.button`
  background: inherit;
  color: inherit;
  background: ${(props) =>
    props.ghost
      ? 'transparent'
      : props.inverted
      ? props.theme.colors.primaryColor
      : props.theme.colors.secondaryColor};
  /* Manual Background color theme override */
  background: ${(props) =>
    props.ghost
      ? 'transparent'
      : props.inverted
      ? props.primaryColor
      : props.secondaryColor};
  color: ${(props) =>
    props.inverted
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};
  /* Manual Background color theme override */
  color: ${(props) =>
    props.inverted ? props.secondaryColor : props.primaryColor};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.theme.colors.secondaryColor}`
        : `5px solid ${props.theme.colors.primaryColor}`
      : `none`};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.secondaryColor}`
        : `5px solid ${props.primaryColor}`
      : `none`};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 28px;
  cursor: pointer;
  max-width: fit-content;
  min-width: fit-content;
  max-height: fit-content;
  min-height: fit-content;
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  & a {
    text-decoration: none;
    color: inherit;
  }
  ${({ size, ghost }) => {
    if (size === 'small')
      return `font-size: 12px;  ${
        ghost ? 'padding: 7px 23.5px; ' : 'padding: 12px 28px;'
      }`;
    if (size === 'regular')
      return `font-size: 16px;  ${
        ghost ? 'padding: 5.5px 25.5px; ' : 'padding: 10px 30px;'
      }`;
    if (size === 'medium')
      return `font-size: 24px;  ${
        ghost ? 'padding: 7px 27.5px; ' : 'padding: 12px 32px;'
      }`;
    if (size === 'large')
      return `font-size: 30px; border-radius: 38px;  ${
        ghost ? 'padding: 7px 33.5px; ' : 'padding: 12px 38px;'
      }`;
  }}
`;

const Button = (
  { children, type, inverted, ghost, primaryColor, secondaryColor, size },
  props
) => {
  switch (type) {
    case 'pill':
      return (
        <PillButton
          {...props}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          inverted={inverted}
          ghost={ghost}
          size={size}
        >
          {children}
        </PillButton>
      );
    default:
      return (
        <RectangleButton
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          inverted={inverted}
          ghost={ghost}
          size={size}
          {...props}
        >
          {children}
        </RectangleButton>
      );
  }
};

export default Button;
