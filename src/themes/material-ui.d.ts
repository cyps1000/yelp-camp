import { Mixins } from "@material-ui/core/styles/createMixins";
import { CSSProperties } from "@material-ui/styles";

/**
 * Extends the Typography
 */
declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    fontFamily: string;
  }
}

/**
 * Extends the ZIndex
 */
declare module "@material-ui/core/styles/zIndex" {
  interface ZIndex {
    header: number;
    body: number;
  }
}

/**
 * Extends the Mixins
 */
declare module "@material-ui/core/styles/createMixins" {
  interface Mixins {
    inputBase: CSSProperties;
    inputBaseError: CSSProperties;
    inputError: CSSProperties;
    notchedOutline: CSSProperties;
    notchedOutlineError: CSSProperties;
    inputRoot: CSSProperties;
  }
}

/**
 * Extends the Palettes
 */
declare module "@material-ui/core/styles/createPalette" {
  interface TypeText {}

  interface TypeBackground {
    form: string;
    banner: string;
    main: string;
    dashboard: string;
  }

  interface CommonColors {}

  interface PaletteColor {
    lighter?: string;
    darker?: string;
    background?: string;
    accent?: string;
  }

  interface Palette {
    button: PaletteColor;
    phoenix: {
      text?: string;
      border?: string;
      inputSvg?: string;
    };
    interactive: {
      main: string;
      hover: string;
    };
    border: {
      main: string;
      input: string;
      inputHover: string;
      darker?: string;
      dark?: string;
    };
  }
}
