import API from "./api";

export const upload_post = async (payload) => {
  const response = await API.post("api/content/post/", payload);
  return response.data;
};
export const update_post = async (payload, id) => {
  const response = await API.patch(`api/content/post/${id}/`, payload);
  return response.data;
};
export const delete_post = async (id) => {
  const response = await API.delete(`api/content/post/${id}/`);
  return response.data;
};

export const all_posts = async () => {
  const response = await API.get("api/content/posts/");
  return response.data;
};
export const all_draft_posts = async () => {
  const response = await API.get("api/content/posts/draft/");
  return response.data;
};
