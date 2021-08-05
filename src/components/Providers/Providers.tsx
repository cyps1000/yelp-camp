/**
 * Imports Material UI components
 */
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

/**
 * Imports components
 */
import { AuthProvider, MessageProvider, UserProvider } from "../../hooks";

/**
 * Imports themes
 */
import { mainTheme } from "../../themes/main";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  /**
   * Handles getting the theme data
   */
  const getTheme = () => createTheme(mainTheme);

  return (
    <ThemeProvider theme={getTheme()}>
      <AuthProvider>
        <UserProvider>
          <MessageProvider>{children}</MessageProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
