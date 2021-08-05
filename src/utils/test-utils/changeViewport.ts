/**
 * External imports
 */
import mediaQuery from "css-mediaquery";

/**
 * Defines the BreakpointKey type
 */
type BreakpointKey = "xl" | "lg" | "md" | "sm" | "xs";

/**
 * Handles getting the width based on the breakpoint key provided
 */
const getWidthByThemeBreakpoints = (breakpointKey: BreakpointKey) => {
  switch (breakpointKey) {
    case "xl":
      return 1920;
    case "lg":
      return 1366;
    case "md":
      return 1024;
    case "sm":
      return 600;
    case "xs":
      return 300;
    default:
      return 1920;
  }
};

/**
 * Handles changing the viewport
 */
export const changeViewport = (breakpointKey: BreakpointKey): any => {
  let width: number = getWidthByThemeBreakpoints(breakpointKey);

  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width: width }),
      addListener: () => {},
      removeListener: () => {}
    };
  };
};
