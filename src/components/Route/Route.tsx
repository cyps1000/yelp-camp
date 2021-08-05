import { cloneElement } from "react";

/**
 * External Imports
 */
import { Route as BaseRoute } from "react-router-dom";

/**
 * Imports types
 */
import { RouteProps } from "./Route.types";

/**
 * Custom Route component, extended Route from react-router-dom to
 * pass props to children. (optional)
 */
export const Route: React.FC<RouteProps> = (props) => {
  const { withProps, path, exact, children } = props;

  if (!withProps)
    return (
      <BaseRoute path={path} exact={exact}>
        {children}
      </BaseRoute>
    );

  return (
    <BaseRoute
      path={path}
      exact={exact}
      render={(props) => {
        return cloneElement(children, { ...props });
      }}
    />
  );
};
