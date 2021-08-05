import { createContext } from "react";

/**
 * Defines the Provider values interface
 */
export interface ProviderValues {
  scrollContainerId?: string;
}

/**
 * Defines the Provider props interface
 */
export interface ProviderProps {
  scrollContainerId?: string;
}

/**
 * Defines the default values
 */
export const defaultValues: ProviderValues = {
  scrollContainerId: undefined
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
