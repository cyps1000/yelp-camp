import { useEffect } from "react";

/**
 * Imports test utils
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import { MessagePopup } from "./MessagePopup";

/**
 * Imports hooks
 */
import { useMessage } from "../../hooks";

const MessagePopupWithHook = () => {
  /**
   * Gets the message dispatcher
   */
  const { dispatchMessage } = useMessage();

  useEffect(() => {
    dispatchMessage({
      message: "Test",
    });
  }, []);

  return <MessagePopup />;
};

it("renders without crashing", () => {
  render(<MessagePopupWithHook />);
});
