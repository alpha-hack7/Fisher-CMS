import { useQuery } from "@tanstack/react-query";
import API from "./api";

export const upload_video = async (payload) => {
  const response = await API.post("api/content/video/", payload);
  return response.data;
};
const all_videos = async () => {
  const response = await API.get("api/content/videos/");
  return response.data;
};
const all_draft_videos = async () => {
  const response = await API.get("api/content/videos/draft/");
  return response.data;
};

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: all_videos,
  });
};
export const useDraftVideos = () => {
  return useQuery({
    queryKey: ["draft-videos"],
    queryFn: all_draft_videos,
  });
};
