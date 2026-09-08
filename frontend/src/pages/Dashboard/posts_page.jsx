import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePosts } from "../../api/post";
import Loader from "../../sections/components/loader";
import { Posts_Section } from "./drafts_page";

const Posts_page = () => {
  const navigate = useNavigate();
  const { data: posts, isLoading, error } = usePosts();
  useEffect(() => {
    if (error) {
      toast.error("Posts loading failed");
    }
  }, [error]);
  return (
    <div className="posts-page">
      <nav>Dashboard &gt; Posts &gt;</nav>
      <h2>Posts</h2>
      {isLoading ? <Loader /> : <Posts_Section posts={posts} />}
      <button onClick={() => navigate("make-post")} className="make-post-btn">
        Make a new Post
      </button>
    </div>
  );
};

export default Posts_page;
