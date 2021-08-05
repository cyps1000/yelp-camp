import { Switch, Route } from "react-router-dom";

/**
 * Imports types
 */
import { Paths } from "../../hooks";

/**
 * Displays the component
 */
export const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={Paths.Public}>
        <h2>Public Route</h2>
      </Route>
      <Route exact path={Paths.Login}>
        <h2>Login Route</h2>
      </Route>
      <Route exact path={Paths.Register}>
        <h2>Register Route</h2>
      </Route>
      <Route exact path={Paths.Campground}>
        <h2>Campground Route</h2>
      </Route>
      <Route exact path={Paths.Campgrounds}>
        <h2>Campgrounds Route</h2>
      </Route>
    </Switch>
  );
};
