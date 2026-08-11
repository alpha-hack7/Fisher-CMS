import API from "./user";

export const logout = async () => {
  try {
    await API.post("api/auth/logout/", {
      refresh: localStorage.getItem("refresh"),
    });
  } finally {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
};
