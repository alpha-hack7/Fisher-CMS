import { useQuery } from "@tanstack/react-query";
import { all_draft_videos, all_videos } from "../api/video";

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
