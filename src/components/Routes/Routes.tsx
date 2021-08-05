/**
 * External Imports
 */
import { Switch } from "react-router-dom";

/**
 *  Imports components
 */
import { Route } from "../Route";
import { PublicRoutes } from "../PublicRoutes";
import { PrivateRoutes } from "../PrivateRoutes";

/**
 * Imports types
 */
import { Paths } from "../../hooks";

/**
 * Displays the component
 */
export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route withProps path={Paths.Main}>
        <PrivateRoutes />
      </Route>
      <Route withProps path={Paths.Public}>
        <PublicRoutes />
      </Route>
    </Switch>
  );
};
