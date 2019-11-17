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
  background: base.black,
  buttonPrimary: base.white,
  inputPrimary: base.white,

  textPrimary: base.white,
  textSecondary: "rgb(70, 48, 235)",
  buttonTextPrimary: base.black,
  inputTextPrimary: base.black
};

const textOnColors = {
  white: base.white,
  midnight: base.black
};

export default {
  ...colors,
  ...base,
  textOn: textOnColors
};
