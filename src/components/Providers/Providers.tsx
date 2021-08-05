/**
 * Imports components
 */
import { AuthProvider, MessageProvider, UserProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  return (
    <AuthProvider>
      <UserProvider>
        <MessageProvider>{children}</MessageProvider>
      </UserProvider>
    </AuthProvider>
  );
};
