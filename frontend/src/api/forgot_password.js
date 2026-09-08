import API from "./api";

export const forgot_password = async (email) => {
  const response = await API.post("api/auth/password/reset/", email);
  return response;
};
