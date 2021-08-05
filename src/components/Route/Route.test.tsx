/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import { Route } from "./Route";

/**
 * Imports types
 */
import { RouteProps } from "./Route.types";
import { Paths } from "../../hooks";

/**
 * Defines the test props
 */
const props: RouteProps = {
  path: Paths.Public,
  children: <div test-id="children-test"> Children </div>,
  withProps: false,
};

/**
 * Default test
 */
it("renders without crashing", () => {
  const { getByTestId } = render(<Route {...props} />);
  const children = getByTestId("children-test");
  expect(children).toBeDefined();
});
