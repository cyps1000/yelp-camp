import { useEffect } from "react";

/**
 * External Imports
 */
import { Route, Switch, Redirect } from "react-router-dom";

/**
 * Imports component's actions
 */
import { PrivateRoutesActions } from "./PrivateRoutes.actions";

/**
 * Imports types
 */
import { Paths } from "../../hooks";

/**
 * Displays the component
 */
export const PrivateRoutes: React.FC = () => {
  /**
   * Initializes component's actions
   */
  const { unauthorized, setUnauthorized, token, checkIfLoggedIn } =
    PrivateRoutesActions();

  /**
   * Handles checking if the user is logged in
   */
  useEffect(() => {
    checkIfLoggedIn();
    // eslint-disable-next-line
  }, [token]);

  /**
   * Handles updating the unauthorized state
   */
  useEffect(() => {
    if (!localStorage.getItem("token")) setUnauthorized(true);
    // eslint-disable-next-line
  }, [token]);

  /**
   * Handles redirecting the user if unauthorized
   */
  if (unauthorized) return <Redirect to="/" />;

  return (
    <Switch>
      <Route exact path={Paths.UserAccount}>
        <h2>UserAccount Route</h2>
      </Route>
      <Route exact path={Paths.EditUserAccount}>
        <h2>EditUserAccount Route</h2>
      </Route>
      <Route exact path={Paths.UserCampgrounds}>
        <h2>UserCampgrounds Route</h2>
      </Route>
      <Route exact path={Paths.UserCampgroundEdit}>
        <h2>UserCampgroundEdit Route</h2>
      </Route>
      <Route exact path={Paths.UserReviews}>
        <h2>UserReviews Route</h2>
      </Route>
    </Switch>
  );
};
