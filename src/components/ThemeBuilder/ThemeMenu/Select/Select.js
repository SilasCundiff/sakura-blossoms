import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import ReactSelect from 'react-select';
import { useThemeBuilderContext } from '../../ThemeBuilderContext';

const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    background: ${(props) => props.theme.colors.secondaryColor};
    box-shadow: 0px 2px 4px 3px rgba(23, 23, 23, 0.3);
  }
  & .Select__control--is-focused,
  .Select__control--menu-is-open {
    border: none;
    box-shadow: none;
    box-shadow: 0px 3px 4px 1px rgba(23, 23, 23, 0.5);
  }
  & .Select__value-container {
    & .Select__placeholder,
    .Select__single-value {
      font-family: ${(props) => props.theme.fonts.primaryFont.font};
      font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
  & .Select__indicator-separator {
    background-color: ${(props) => props.theme.colors.primaryColor};
  }
  &.Select__indicator .Select__dropdown-indicator {
    & svg {
      & path {
        color: '#fff' !important;
      }
    }
  }
  & .Select__menu-list {
    background: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.secondaryColor};
    font-family: ${(props) => props.theme.fonts.secondaryFont.font};
    font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};
    & .Select__option {
      transition: all 0.1s;
    }
    & .Select__option::hover {
      background: ${(props) => props.theme.colors.secondaryColor};
      color: ${(props) => props.theme.colors.primaryColor};
    }
    & .Select__option--is-focused {
      background: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.secondaryColor};
      border: 1px solid ${(props) => props.theme.colors.secondaryColor};
      border-top: none;
      border-bottom: none;
      box-shadow: 0px 2px 4px 3px rgba(23, 23, 23, 0.3);
    }
    & .Select__option--is-selected {
      border-top: none;
      border-bottom: none;
      background: ${(props) => props.theme.colors.secondaryColor};
      color: ${(props) => props.theme.colors.primaryColor};
      font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
      box-shadow: inset 0px 2px 4px 3px rgba(23, 23, 23, 0.3);
    }
  }
`;

const CustomSelect = (props) => {
  const { presetThemes, selectedStyles, setSelectedStyles } =
    useThemeBuilderContext();
  const { presetName, presetID } = selectedStyles;
  const [selection, setselection] = useState({
    value: `${presetID}`,
    label: `${presetName}`,
  });

  const options = [
    ...presetThemes.map((preset) => {
      const presetObject = {
        value: `${preset.presetID}`,
        label: `${preset.presetName}`,
        tabindex: 2,
      };
      return presetObject;
    }),
  ];
  const styles = {
    dropdownIndicator: (defaultStyles, props) => ({
      ...defaultStyles,
      '& svg': { color: `${props.theme.colors.primaryColor}` },
    }),
  };

  const handleChange = (e) => {
    const index = e.value;
    setSelectedStyles({ ...presetThemes[index] });
    setselection({ ...e });
  };

  return (
    <StyledSelect
      options={options}
      value={selection.presetID}
      defaultValue={selection}
      placeholder={presetName}
      onChange={handleChange}
      isSearchable
      tabSelectsValue={false}
      tabIndex='0'
      {...props}
      // menuIsOpen
      styles={styles}
    />
  );
};

export default withTheme(CustomSelect);
