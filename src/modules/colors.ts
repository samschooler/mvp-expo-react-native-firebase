export type ColorType =
  | "background"
  | "textPrimary"
  | "textSecondary"
  | "buttonPrimary"
  | "buttonTextPrimary";

const base = {
  white: "#FFFFFF",
  black: "#000000"
};

const colors = {
  background: base.white,
  buttonPrimary: base.black,
  inputPrimary: base.black,

  textPrimary: base.black,
  textSecondary: "rgb(70, 48, 235)",
  buttonTextPrimary: base.white,
  inputTextPrimary: base.white
};

const textOnColors = {
  white: base.black,
  midnight: base.white
};

export default {
  ...colors,
  ...base,
  textOn: textOnColors
};
