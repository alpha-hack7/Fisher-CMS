import API from "./user";

const loginUser = async (data) => {
  const response = await API.post("api/auth/login/", data);
  return response;
};

export default loginUser;
