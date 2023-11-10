import { StyledInputProps, ValidatedInputState } from "./GlobalInterfaces";

export const determineStyledInputBorder = (props: StyledInputProps): string => {
  let { active, valid, theme } = props;

  if (!active && valid) {
    return `2px solid #999999`;
  }

  if (!active && !valid) {
    return `2px solid #FF5B83`;
  }

  if (active && valid) {
    return `2px solid  #9A35EF`;
  }

  if (active && !valid) {
    return `2px solid #FF5B83`;
  }

  return "";
};

export const determineLabelColor = (props: StyledInputProps): string => {
  let { active, valid, theme, color } = props;

  if (color && color === "error") {
    return theme.colors.error;
  }

  if (color && color === "white") {
    return "#AAC8C2";
  }

  if (color && color === "gray") {
    return "#8B8793";
  }

  return "";
};

export const determineValidatedTextLabel = (
  active: boolean,
  labelActive: boolean
): string => {
  if (active || labelActive) {
    return "gray";
  }

  return "white";
};
