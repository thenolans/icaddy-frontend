import React from "react";
import Select from "react-select";

const SelectStyled = props => {
  const colorPrimaryBase = "#6eba7e";
  const colorGrayLighten = "#f2f2f2";
  const textColor = "#757575";

  const customStyles = {
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      color: isSelected
        ? colorGrayLighten
        : isFocused
        ? colorGrayLighten
        : textColor,
      "&:hover": {
        backgroundColor: colorPrimaryBase,
        color: colorGrayLighten
      },
      "&:active": {
        backgroundColor: colorPrimaryBase,
        color: colorGrayLighten
      }
    }),
    control: (provided, { isSelected, isFocused }) => ({
      ...provided,
      paddingLeft: 8,
      height: 54,
      border: isSelected
        ? "solid 2px colorPrimaryBase"
        : isFocused
        ? "solid 2px colorPrimaryBase"
        : "none"
    }),
    placeholder: provided => ({
      ...provided,
      color: textColor
    })
  };

  return (
    <Select
      styles={customStyles}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: colorPrimaryBase,
          primary: colorPrimaryBase,
          neutral0: colorGrayLighten
        }
      })}
      {...props}
    />
  );
};

export default SelectStyled;
