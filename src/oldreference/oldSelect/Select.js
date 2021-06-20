import React from 'react';
import styled from 'styled-components';
import Option from './Option';
import { useThemeBuilderContext } from '../../components/ThemeBuilder/ThemeBuilderContext';

const StyledSelect = styled.select`
  background-color: transparent;
  border: none;
  width: 100%;
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.secondaryColor};
  cursor: pointer;
  min-height: 30px;
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  font-size: 16px;
  margin: 0;
  & * {
    background: ${(props) => props.theme.colors.secondaryColor};
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

const Select = () => {
  const { presetThemes, selectedStyles, setSelectedStyles } =
    useThemeBuilderContext();

  const options = presetThemes.map((preset) => {
    return (
      <Option
        value={preset.presetID}
        name={preset.presetName}
        key={preset.presetID}
      />
    );
  });

  const handleSelectedStyles = (e) => {
    setSelectedStyles({ ...presetThemes[e.target.value] });
  };

  return (
    <StyledSelect
      value={selectedStyles.presetID}
      name={selectedStyles.presetName}
      onChange={handleSelectedStyles}
    >
      {options}
    </StyledSelect>
  );
};

export default Select;
