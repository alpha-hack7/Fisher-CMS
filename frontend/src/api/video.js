import API from "./api";

export const upload_video = async (payload) => {
  const response = await API.post("api/content/video/", payload);
  return response.data;
};
export const update_video = async (payload, id) => {
  const response = await API.patch(`api/content/video/${id}/`, payload);
  return response.data;
};
export const delete_video = async (id) => {
  const response = await API.delete(`api/content/video/${id}/`);
  return response.data;
};
export const all_videos = async () => {
  const response = await API.get("api/content/videos/");
  return response.data;
};
export const all_draft_videos = async () => {
  const response = await API.get("api/content/videos/draft/");
  return response.data;
};
