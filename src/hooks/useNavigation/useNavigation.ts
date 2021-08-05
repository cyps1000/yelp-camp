import { useContext } from "react";

/**
 * Imports types
 */
import { Paths } from "./useNavigation.types";

/**
 * Imports the context
 */
import { context } from "./Context";

/**
 * Imports the provider
 */
import { NavigationProvider } from "./Provider";

/**
 * Imports hooks
 */
import { useHistory } from "react-router-dom";

/**
 * Defines the main hook
 */
const useNavigation = () => {
  /**
   * Gets the context value
   */
  const { scrollContainerId } = useContext(context);

  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Handles going to a route
   */
  const goTo = (path: Paths) => {
    if (history.location.pathname === path) return;
    history.push(path);
  };

  /**
   * Handles getting all the route paths
   */
  const getPaths = () => Object.values(Paths) as string[];

  /**
   * Handles going back
   */
  const goBack = () => history.goBack();

  return {
    goTo,
    goBack,
    getPaths,
    Paths,
    scrollContainerId
  };
};

export { useNavigation, NavigationProvider };
