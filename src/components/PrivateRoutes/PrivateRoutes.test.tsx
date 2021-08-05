/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "../../utils";

/**
 * Imports component
 */
import { PrivateRoutes } from "./PrivateRoutes";

/**
 * Default test
 */
it("renders without crashing", () => {
  render(<PrivateRoutes />);
});
