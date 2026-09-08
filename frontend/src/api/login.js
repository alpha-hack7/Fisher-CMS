import API from "./api";

export const loginUser = async (data) => {
  const response = await API.post("api/auth/login/", data);
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);
  localStorage.setItem("username", response.data.user.username);
};
