import API from "./user";

const forgot_password = async (email) => {
  const response = await API.post("/api/auth/password/reset/", email);
  return response;
};

export default forgot_password;
