export type ColorType = "white" | "midnight" | "primary" | "secondary";

const colors = {
  white: "#FFFFFF",
  midnight: "#26042D",
  primary: "#FF003C",
  secondary: "rgb(70, 48, 235)"
};

const textColors = {
  white: colors.midnight,
  midnight: colors.white
};

export default {
  ...colors,
  textOn: textColors
};
