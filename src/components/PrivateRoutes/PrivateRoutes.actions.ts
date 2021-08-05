import { useState } from "react";

/**
 * Imports hooks
 */
import { useAuth, useUser, useApi, User } from "../../hooks";

/**
 * Defines the actions
 */
export const PrivateRoutesActions = () => {
  /**
   * Inits the unauthorized state
   */
  const [unauthorized, setUnauthorized] = useState(false);

  /**
   * Init the useApiClient hook
   */
  const { apiClient } = useApi({ withCredentials: true });

  /**
   * Gets the auth state
   */
  const { token, updateAuth } = useAuth();

  /**
   * Gets the user state
   */
  const { updateUser } = useUser();

  /**
   * Handles fetching the user data if exists
   */
  const checkIfLoggedIn = async () => {
    const response = await apiClient.get<User>("/auth/user");

    if (response) {
      const { data } = response;

      if (!data) {
        setUnauthorized(true);
        updateAuth({ isLoggedIn: false });
        localStorage.removeItem("token");
        return;
      }

      updateUser(data);
      updateAuth({ isLoggedIn: true });
    }
  };

  return {
    unauthorized,
    setUnauthorized,
    token,
    checkIfLoggedIn,
  };
};
