import { createContext, ReactNode } from "react";

/**
 * Defines the provider value
 */
export interface ProviderValues {
  config: {
    message: string | ReactNode;
    severity?: "success" | "warning" | "error";
    permanent?: boolean;
    autoClose?: number;
  };
  open: boolean;
  resetMessage: () => void;
  dispatchMessage: (props: ProviderValues["config"]) => void;
}

/**
 * Defines the default value
 */
export const defaultValues: ProviderValues = {
  config: {
    message: "",
    severity: "success",
    permanent: false,
    autoClose: 5000,
  },
  open: false,
  resetMessage: () => {},
  dispatchMessage: (props) => {},
};

/**
 * Defines a context where the completion state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
