import { useState, useEffect } from "react";

/**
 * Imports the context
 */
import { context, ProviderValues, ProviderProps } from "./Context";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const NavigationProvider: React.FC<ProviderProps> = (props) => {
  const { children, scrollContainerId } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Init the scroll container
   */
  const [scrollContainer, setScrollContainer] = useState(scrollContainerId);

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    scrollContainerId: scrollContainer
  };

  /**
   * Updates the scroll container
   */
  useEffect(() => {
    if (scrollContainer) setScrollContainer(scrollContainer);
  }, [scrollContainer]);

  return <Provider value={providerValue}>{children}</Provider>;
};
