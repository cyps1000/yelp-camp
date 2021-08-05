import { Fragment } from "react";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseLine from "@material-ui/core/CssBaseline";

/**
 * Component Imports
 */
import { Router } from "./components/Router";

/**
 * Imports styling
 */
import "./App.css";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseLine />
      <Router />
    </Fragment>
  );
};
