import { palette as MainPalette } from "./main";

/**
 * Defines the mixins palette
 */
type MixinsPalette = typeof MainPalette;

/**
 * Handles generating mixins based on current active theme / palette
 */
export const generateMixins = (palette: MixinsPalette) => {
  const inputBase = {
    outline: 0,
    padding: "10px 15px",
    color: palette.text.primary,
    fontSize: 14,
    "&:-webkit-autofill": {
      boxShadow: `0 0 0 50px ${palette.common.white} inset`,
      borderRadius: 0,
      "-webkit-box-shadow": `0 0 0 50px ${palette.common.white} inset`,
      "-webkit-text-fill-color": palette.text.primary,
    },
    "&:-webkit-autofill::first-line": {
      fontSize: 14,
    },
    "&:-webkit-autofill:focus": {
      boxShadow: `0 0 0 50px ${palette.common.white} inset`,
      borderRadius: 0,
      "-webkit-box-shadow": `0 0 0 50px ${palette.common.white} inset`,
      "-webkit-text-fill-color": palette.text.primary,
    },
  };

  const inputError = {
    color: palette.error.main,
    "&:-webkit-autofill": {
      "-webkit-text-fill-color": palette.error.main,
    },
    "&:-webkit-autofill:focus": {
      "-webkit-text-fill-color": palette.error.main,
    },
  };

  const inputBaseError = {
    borderColor: palette.error.main,
    "&:hover": {
      borderColor: palette.error.main,
    },
    "&:focus": {
      borderColor: palette.error.main,
    },
  };

  const notchedOutline = {
    outline: 0,
    borderColor: palette.border.input,
    "&:hover": {
      borderColor: palette.primary.main,
    },
  };

  const notchedOutlineError = {
    borderColor: palette.error.main,
    "&:hover": {
      borderColor: palette.error.main,
    },
    "&:focus": {
      borderColor: palette.error.main,
    },
  };

  const inputRoot = {
    minHeight: "2.5rem",
    outline: 0,
    background: palette.common.white,
    "& $notchedOutline": {
      borderColor: palette.border.input,
    },
    "& $notchedOutlineError": {
      borderColor: palette.error.main,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    "&:hover": {
      "& $notchedOutline": {
        borderColor: palette.border.inputHover,
      },
      "& $notchedOutlineError": {
        borderColor: palette.error.main,
      },
    },
    "&.Mui-focused": {
      "& $notchedOutline": {
        borderColor: palette.border.inputHover,
        borderWidth: 1,
      },
      "& $notchedOutlineError": {
        borderColor: palette.error.main,
      },
    },
  };

  return {
    inputBase,
    inputBaseError,
    inputError,
    notchedOutline,
    notchedOutlineError,
    inputRoot,
  };
};
