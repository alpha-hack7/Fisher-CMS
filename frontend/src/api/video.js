import { useQuery } from "@tanstack/react-query";
import API from "./user";

export const upload_video = async (payload) => {
  const response = await API.post("api/content/video/", payload);
  return response.data;
};
const all_videos = async () => {
  const response = await API.get("api/content/videos/");
  return response.data;
};

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: all_videos,
  });
};
