/**
 * External Imports
 */
import { BrowserRouter } from "react-router-dom";

/**
 *  Imports components
 */
import { Providers } from "../Providers";
import { MessagePopup } from "../MessagePopup";
import { Routes } from "../Routes";

/**
 * Displays the component
 */
export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Providers>
        <MessagePopup />
        <Routes />
      </Providers>
    </BrowserRouter>
  );
};
