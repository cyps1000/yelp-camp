/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import { PublicRoutes } from "./PublicRoutes";

/**
 * Default test
 */
it("renders without crashing", () => {
  render(<PublicRoutes />);
});
