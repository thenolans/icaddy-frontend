import React from "react";
import Select from "react-select";

const SelectStyled = props => {
  const colorPrimaryBase = "#6eba7e";
  const colorGrayLighten75 = "#f2f2f2";
  const colorPlaceholder = "#757575";
  const colorGrayLighten50 = "#b3b3b3";

  const customStyles = {
    option: (provided, { isFocused, isSelected }) => ({
      color: isSelected
        ? colorGrayLighten75
        : isFocused
        ? colorPrimaryBase
        : "inherit",
      backgroundColor: isSelected ? colorPrimaryBase : "inherit",
      "&:hover": {
        backgroundColor: colorPrimaryBase,
        color: colorGrayLighten75
      },
      "&:active": {
        backgroundColor: colorPrimaryBase,
        color: colorGrayLighten75
      },
      padding: 16
    }),
    control: (provided, { isSelected, isFocused }) => ({
      ...provided,
      paddingLeft: 8,
      height: 54,
      borderRadius: 8,
      border:
        isSelected || isFocused
          ? `solid 2px ${colorPrimaryBase}`
          : "solid 2px transparent",
      "&:hover": {
        borderColor: colorGrayLighten50
      },
      boxShadow: "none"
    }),

    placeholder: provided => ({
      ...provided,
      color: colorPlaceholder
    })
  };

  return (
    <Select
      isSearchable={false}
      styles={customStyles}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: colorPrimaryBase,
          primary: colorPrimaryBase,
          neutral0: colorGrayLighten75
        }
      })}
      {...props}
    />
  );
};

export default SelectStyled;
