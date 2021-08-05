import { ReactElement } from "react";

/**
 * External Imports
 */
import { RouteProps as BaseRouteProps } from "react-router-dom";

/**
 * Imports types
 */
import { Paths } from "../../hooks";

/**
 * Defines the props interface
 */
export interface RouteProps extends BaseRouteProps {
  path?: Paths;
  children: ReactElement;
  withProps?: boolean;
}
