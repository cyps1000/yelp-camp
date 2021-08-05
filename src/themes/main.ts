import { lighten, darken } from "@material-ui/core/styles";

/**
 * Imports common theme settings
 */
import { breakpoints, font, typography, zIndex } from "./common";

/**
 * Imports mixins
 */
import { generateMixins } from "./mixins";

/**
 * Defines the main colors
 */
const primary = "#08a4ff";
const secondary = "#61ab4f";
const background = "#61ab4f";
const button = "#5d5d5d";
const error = "#e85b5b";
const warning = "#f3a025";
const info = "#08a4ff";
const success = "#61ab4f";
const border = "#eaeaea";

/**
 * Defines the palette of colors
 */
export const palette = {
  common: {
    black: "#000",
    white: "#fff",
  },
  primary: {
    light: lighten(primary, 0.3),
    lighter: lighten(primary, 0.15),
    main: primary,
    darker: darken(primary, 0.15),
    dark: darken(primary, 0.3),
    accent: "rgb(255 105 13)",
    contrastText: "#fff",
  },
  secondary: {
    light: lighten(secondary, 0.3),
    lighter: lighten(secondary, 0.15),
    main: secondary,
    darker: darken(secondary, 0.15),
    dark: darken(secondary, 0.3),
    contrastText: "#fff",
  },
  sidebar: {
    main: "#f3f3f3",
    text: "#282828",
    active: "#b7b7b7",
  },
  button: {
    light: lighten(button, 0.3),
    lighter: lighten(button, 0.15),
    main: button,
    darker: darken(button, 0.15),
    dark: darken(button, 0.3),
    contrastText: "#fff",
  },
  error: {
    light: lighten(error, 0.3),
    lighter: lighten(error, 0.15),
    main: error,
    darker: darken(error, 0.15),
    dark: darken(error, 0.3),
    contrastText: "#fff",
    background: "#ffe9e9",
  },
  warning: {
    light: lighten(warning, 0.3),
    lighter: lighten(warning, 0.15),
    main: warning,
    darker: darken(warning, 0.15),
    dark: darken(warning, 0.3),
    contrastText: "#fff",
  },
  info: {
    light: lighten(info, 0.3),
    lighter: lighten(info, 0.15),
    main: info,
    darker: darken(info, 0.15),
    dark: darken(info, 0.3),
    contrastText: "#fff",
  },
  success: {
    light: lighten(success, 0.3),
    lighter: lighten(success, 0.15),
    main: success,
    darker: darken(success, 0.15),
    dark: darken(success, 0.3),
    contrastText: "#fff",
  },
  border: {
    main: border,
    darker: darken(border, 0.15),
    dark: darken(border, 0.3),
    input: "#b7b7b7",
    inputHover: "#797979",
  },
  phoenix: {
    text: button,
    border: "#c5c5c5",
    inputSvg: "#757777",
  },
  interactive: {
    main: "#53b6f0",
    hover: "#00c4ff",
  },
  grey: {
    50: "#f5f4f4",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#4e4e4e",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A300: "#35363d",
    A400: "#303030",
    A700: "#616161",
  },
  text: {
    primary: "#555a5f",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
  background: {
    default: "#fff",
    paper: "#fff",
    form: "#fbfbfb",
    banner: background,
    main: background,
    dashboard: "#000",
  },
};

/**
 * Creates the Theme
 */
let theme = {
  palette,
  font,
  typography,
  zIndex,
  breakpoints,
  mixins: generateMixins(palette),
};

export { theme as mainTheme };
