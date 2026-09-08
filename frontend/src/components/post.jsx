import { Edit, Trash2 } from "react-feather";
import { formatDate } from "../utils/formatDate";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>
        <em>{post.short_text}</em>
      </p>
      <p>{post.description}</p>
      <div className="post-info">
        <time>{formatDate(post.created_at)}</time>
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
            <Post post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <p>No Posts Found</p>
      )}
    </section>
  );
};
