/**
 * Imports test utils
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import { Providers } from "./Providers";

it("renders without crashing", () => {
  render(<Providers />);
});

it("renders children", () => {
  const { getByText } = render(<Providers>Children </Providers>);
  expect(getByText("Children")).toBeDefined();
});
