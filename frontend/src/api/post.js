import API from "./user";

export const upload_post = async (payload) => {
  const response = await API.post("api/content/post/", payload);
  return response.data;
};
