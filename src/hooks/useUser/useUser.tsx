import { useContext } from "react";

/**
 * Imports the context
 */
import { context, User as UserData } from "./Context";

/**
 * Imports the provider
 */
import { UserProvider } from "./Provider";

/**
 * Defines the main hook
 *
 * - Returns the context / object
 * - To be used inside components
 */
const useUser = () => useContext(context);

export type User = UserData;
export { useUser, UserProvider };
