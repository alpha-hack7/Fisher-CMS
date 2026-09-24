import { Edit, Trash2 } from "react-feather";
import { formatDate } from "../utils/formatDate";
import { delete_post } from "../api/post";
import { toast } from "react-toastify";

const Post = ({ post, post_id }) => {
  const id = post_id;
  const deletePost = async () => {
    try {
      await delete_post(id);
      toast.success("Post deleted Successfully!");
    } catch (error) {
      toast.error(error | "Something Went Wrong");
    }
  };
  return (
    <div className="group/post min-w-62.5 min-h-50 relative p-4 rounded-2xl border border-[#555]">
      <h2>{post.title}</h2>
      <p>
        <em>{post.short_text}</em>
      </p>
      <p>{post.description}</p>
      <div className="post-info">
        <time>{formatDate(post.created_at)}</time>
      </div>
      <div className="absolute right-0 top-0">
        <button
          className="group-hover/post:opacity-100 bg-transparent opacity-0 border-[#555] border transition-opacity duration-1000"
          title="Edit Post"
        >
          <Edit size={20} />
        </button>
        <button
          className="group-hover/post:opacity-100 bg-transparent opacity-0 border-[#555] border transition-opacity duration-1000"
          title="Delete Post"
          onClick={deletePost}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};
export const Posts_Section = ({ posts }) => {
  return (
    <section className="mt-4 pb-4 h-[75dvh] overflow-y-auto overflow-x-hidden scrollbar-none">
      {posts.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-4 mb-4">
          {posts.map((post) => (
            <Post post={post} key={post.id} post_id={post.id} />
          ))}
        </div>
      ) : (
        <p>No Posts Found</p>
      )}
    </section>
  );
};
