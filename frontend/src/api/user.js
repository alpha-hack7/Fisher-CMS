import axios from "axios";
const url = "http://127.0.0.1:8000/";
const API = axios.create({
  baseURL: url,
});

// Attach access token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Refresh access token when it expires
API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Only try to refresh on 401
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");

      if (!refresh) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        return Promise.reject(error);
      }

      try {
        const response = await API.post("api/auth/token/refresh/", {
          refresh: refresh,
        });

        const newAccessToken = response.data.access;

        // Save new access token
        localStorage.setItem("access", newAccessToken);

        // Add new token to original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Try original request again
        return API(originalRequest);
      } catch (refreshError) {
        // Refresh token is invalid/expired
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default API;
