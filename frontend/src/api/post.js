import { useQuery } from "@tanstack/react-query";
import API from "./user";

export const upload_post = async (payload) => {
  const response = await API.post("api/content/post/", payload);
  return response.data;
};
const all_posts = async () => {
  const response = await API.get("api/content/posts/");
  return response.data;
};

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: all_posts,
  });
};
