// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { configure } from "enzyme";
import { configure as configureJest } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
configureJest({ testIdAttribute: "test-id" });

/**
 * Testing Helpers
 */
import mediaQuery from "css-mediaquery";

/**
 * Imports test utils
 */
import { mockHistoryPush, changeViewport } from "./utils/test-utils";

/**
 * Declares new global variables available to jest
 */
declare global {
  namespace NodeJS {
    interface Window {
      matchMedia: (query: any) => any;
    }
  }
}

/**
 * Runs before any tests
 */
beforeAll(() => {
  /**
   * Defines the matchMedia property on the window
   * Used to determine if the document matches the media query string,
   * as well as to monitor the document to detect when it matches (or stops matching) that media query.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   */
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: mediaQuery.match(query, { width: window.innerWidth }),
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  /**
   * Allows us to directly manipulate the innerWidth property on the window
   * By default, this is a read-only operation
   */
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1920,
  });
});

/**
 * Runs before each test
 */
beforeEach(() => {
  /**
   * Initializes the viewport to desktop
   */
  window.matchMedia = changeViewport("xl");
});

/**
 * Runs after each test
 */
afterEach(() => {
  /**
   * Resets the state of all mocks.
   * @see https://jestjs.io/docs/jest-object
   */
  jest.resetAllMocks();
});

/**
 * Mocks react router dom
 */
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: mockHistoryPush,
    location: {
      pathname: "",
    },
  }),
}));
