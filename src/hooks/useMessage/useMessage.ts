import { useContext } from "react";

/**
 * Imports the context
 */
import { context } from "./Context";

/**
 * Imports the provider
 */
import { MessageProvider } from "./Provider";

/**
 * Defines the main hook
 *
 * - Returns the  context / object
 * - To be used inside components
 */
const useMessage = () => useContext(context);

export { useMessage, MessageProvider };
