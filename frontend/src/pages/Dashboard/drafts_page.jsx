import { useEffect, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import { toast } from "react-toastify";
import { useDraftPosts } from "../../api/post";
import { useDraftVideos } from "../../api/video";
import Loader from "../../sections/components/loader";
import { Car } from "../Cars";
import "./css/videos_posts.css";

const Post = ({ time, about, title, description }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>
        <em>{about}</em>
      </p>
      <p>{description}</p>
      <div className="post-info">
        <time>{time}</time>
      </div>
      <div className="post-buttons">
        <button title="Edit Post">
          <Edit size={20} />
        </button>
        <button title="Delete Post">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};
export const Posts_Section = ({ posts }) => {
  return (
    <section>
      {posts.length > 0 ? (
        <div className="all-posts">
          {posts.map((post) => (
            <div key={post.id}>
              <Post
                title={post.title}
                about={post.short_text}
                description={post.description}
                time={post.created_at}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No Posts Found</p>
      )}
    </section>
  );
};
export const Videos_Section = ({ videos }) => {
  return (
    <section>
      {videos.length > 0 ? (
        <div className="all-videos">
          {videos.map((video) => (
            <div className="video" key={video.id}>
              <Car
                car_description={video.short_text_description}
                car_image={video.thumbnail_url}
                car_name={video.title}
                car_vid={video.video_url}
              />
              <div className="video-buttons">
                <button title="Edit Video">
                  <Edit size={20} />
                </button>
                <button title="Delete Video">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Videos Found</p>
      )}
    </section>
  );
};

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
