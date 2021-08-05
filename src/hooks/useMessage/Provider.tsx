import React, { useState, useEffect, ReactNode } from "react";

/**
 * Imports the context
 */
import { context, defaultValues, ProviderValues } from "./Context";

/**
 * Defines props type
 */
type MessageProviderType = (props: { children?: ReactNode }) => any;

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const MessageProvider: MessageProviderType = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Init the config state
   */
  const [config, setConfig] = useState(defaultValues.config);

  /**
   * Init the open state
   */
  const [open, setOpen] = useState(false);

  /**
   * Dispatches the message
   */
  const dispatchMessage = (props: ProviderValues["config"]) => {
    const { severity, permanent, autoClose, message } = props;

    setOpen(true);
    setConfig({
      message,
      permanent: permanent ? permanent : defaultValues.config.permanent,
      autoClose: autoClose ? autoClose : defaultValues.config.autoClose,
      severity: severity ? severity : defaultValues.config.severity,
    });
  };

  /**
   * Resets the message
   */
  const resetMessage = () => {
    setOpen(false);
  };

  /**
   * Handles reseting the config after the popup has dissapeared
   * This is done in order to not flicker the state inside the popup while still slightly visible to the user
   */
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!open && config.severity !== defaultValues.config.severity) {
      timer = setTimeout(() => {
        setConfig(defaultValues.config);
      }, 300);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [open]);

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    config,
    open,
    resetMessage,
    dispatchMessage,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
