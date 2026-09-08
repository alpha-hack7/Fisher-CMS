import { useQuery } from "@tanstack/react-query";
import { all_draft_posts, all_posts } from "../api/post";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: all_posts,
  });
};
export const useDraftPosts = () => {
  return useQuery({
    queryKey: ["draft-posts"],
    queryFn: all_draft_posts,
  });
};
