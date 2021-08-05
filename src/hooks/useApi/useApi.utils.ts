import { ReactNode } from "react";
import axios from "axios";

/**
 * Defines the hook props interface
 */
interface Config {
  withCredentials?: boolean;
  logout?: () => void;
  dispatchMessage: (props: {
    message: ReactNode;
    severity?: "success" | "warning" | "error" | undefined;
    permanent?: boolean | undefined;
    autoClose?: number | undefined;
  }) => void;
}

/**
 * Defines the api client function
 */
export const getApiClient = (config: Config) => {
  const { withCredentials, logout, dispatchMessage } = config;

  /**
   * Handles getting the base api url
   */
  const getApiUrl = () => {
    if (process.env.NODE_ENV === "development") {
      return process.env.REACT_APP_LOCAL_API;
    }
    return process.env.REACT_APP_PROD_API;
  };

  /**
   * Creates the api client by configuring axios
   */
  const apiClient = axios.create({
    baseURL: getApiUrl(),
  });

  /**
   * Handles intercepting the requests made to the backend
   */
  apiClient.interceptors.request.use(async (request) => {
    if (withCredentials) {
      try {
        const token = JSON.parse(localStorage.getItem("token") || "");
        request.headers["Authorization"] = token;
      } catch (error) {}
    }

    request.headers["Content-Type"] = "application/json";

    return request;
  });

  /**
   * Handles intercepting the responses from the backend
   */
  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response) {
        const data = error.response.data;

        if (data.msg === "Token is not valid") {
          localStorage.removeItem("token");
          dispatchMessage({
            message: "Session expired",
            severity: "error",
            autoClose: 5000,
          });
          logout && logout();
        }

        return Promise.reject(error);
      }
    }
  );

  return { apiClient };
};
