import { fetchWrapper } from "./api";

const TOKEN_KEY = "token";
const TOKEN_EXPIRATION_KEY = "tokenExpiration";
const TOKEN_EXPIRATION_HOURS = 1;

const getExpirationDate = () =>
  new Date(Date.now() + TOKEN_EXPIRATION_HOURS * 60 * 60 * 1000).toISOString();

export const authService = {
  async login(email, password) {
    return this._handleAuthRequest("/auth/login", email, password);
  },

  async signup(email, password) {
    return this._handleAuthRequest("/auth/signup", email, password);
  },

  saveToken(token) {
    if (!token || typeof token !== "string") {
      throw new Error("Invalid token provided");
    }

    try {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(TOKEN_EXPIRATION_KEY, getExpirationDate());
    } catch (error) {
      console.error("Failed to save token:", error);
      throw new Error("Local storage unavailable");
    }
  },

  getToken() {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      const expiration = localStorage.getItem(TOKEN_EXPIRATION_KEY);

      if (!token || !expiration) return null;

      const isValid = new Date(expiration) > new Date();
      if (!isValid) this.clearToken();

      return isValid ? token : null;
    } catch (error) {
      console.error("Failed to retrieve token:", error);
      return null;
    }
  },

  clearToken() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(TOKEN_EXPIRATION_KEY);
    } catch (error) {
      console.error("Failed to clear token:", error);
    }
  },

  async _handleAuthRequest(endpoint, email, password) {
    try {
      const { data } = await fetchWrapper(endpoint, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!data.token) {
        throw new Error("No token received from server");
      }

      this.saveToken(data.token);
      return data;
    } catch (error) {
      this.clearToken();
      throw error;
    }
  },
};
