import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/loader";
import { Posts_Section } from "../../components/post";
import { Videos_Section } from "../../components/video";
import { useDraftPosts } from "../../hooks/usePosts";
import { useDraftVideos } from "../../hooks/useVideos";
import "./css/content.css";

const Drafts_page = () => {
  const videoQuery = useDraftVideos();
  const postQuery = useDraftPosts();
  const [status, setStatus] = useState("posts");
  const [nav, setNav] = useState(["Dashboard", "Drafts"]);
  useEffect(() => {
    if (videoQuery.error) {
      toast.error("Videos failed to load");
    }
    if (postQuery.error) {
      toast.error("Posts loading failed");
    }
  }, [videoQuery.error, postQuery.error]);
  if (videoQuery.isLoading || postQuery.isLoading) return <Loader />;
  return (
    <div className="drafts-page">
      <nav>{nav.join(" > ")}</nav>
      <h3>These are the posts and videos you have made but not uploaded.</h3>
      <p>You can think of them as work in progress.</p>
      <main>
        <div className="draft-selection">
          <span
            onClick={() => {
              setStatus("posts");
              setNav(["Dashboard", "Drafts", "Posts"]);
            }}
          >
            Posts
          </span>
          <span
            onClick={() => {
              setStatus("videos");
              setNav(["Dashboard", "Drafts", "Videos"]);
            }}
          >
            Videos
          </span>
        </div>
        {videoQuery.isLoading || postQuery.isLoading ? (
          <Loader />
        ) : status === "posts" ? (
          <Posts_Section posts={postQuery.data} />
        ) : (
          <Videos_Section videos={videoQuery.data} />
        )}
      </main>
    </div>
  );
};

export default Drafts_page;
