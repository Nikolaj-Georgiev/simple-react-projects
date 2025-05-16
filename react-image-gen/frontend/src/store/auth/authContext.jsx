import { createContext, use, useState } from "react";
import { authService } from "../../services/authService";

const AuthContext = createContext({
  token: null,
  signup: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

export function useAuthContext() {
  const authCtx = use(AuthContext);
  if (!authCtx) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return authCtx;
}

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(authService.getToken());

  async function signup(email, password) {
    try {
      const data = await authService.signup(email, password);
      setToken(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async function login(email, password) {
    try {
      const data = await authService.login(email, password);
      setToken(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    setToken(null);
    authService.clearToken();
  }

  const contextValue = {
    token,
    signup,
    login,
    logout,
  };

  return <AuthContext value={contextValue}>{children}</AuthContext>;
}
