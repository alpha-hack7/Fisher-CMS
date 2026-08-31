import { useEffect } from "react";
import { toast } from "react-toastify";
import { usePosts } from "../../api/post";
import { useVideos } from "../../api/video";
import Loader from "../../sections/components/loader";
import { Car } from "../Cars";
import "./css/videos_posts.css";

const Post = ({ category, time, about, title, description }) => {
  return (
    <div className="post">
      <h3>{category}</h3>
      <h2>{title}</h2>
      <p>
        <em>{about}</em>
      </p>
      <p>{description}</p>
      <div className="post-info">
        <time>{time}</time>
      </div>
      <div className="post-buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
export const Posts_Section = ({ posts }) => {
  return (
    <section>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        <div className="all-posts">
          {posts.map((post) => (
            <div key={post.id}>
              <Post
                category={post.category}
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
      <h2>Videos</h2>
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
                <button>Edit</button>
                <button>Delete</button>
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
  const videoQuery = useVideos();
  const postQuery = usePosts();
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
    <div>
      <nav>Dashboard &gt; Drafts &gt;</nav>
      <h3>These are the posts and videos you have made but not uploaded.</h3>
      <p>You can think of them as work in progress.</p>
      <main>
        <Posts_Section posts={postQuery.data} />
        <Videos_Section videos={videoQuery.data} />
      </main>
    </div>
  );
};

export default Drafts_page;
