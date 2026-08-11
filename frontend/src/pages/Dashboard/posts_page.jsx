import { useNavigate } from "react-router-dom";

const Posts_page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>Dashboard &gt; Posts &gt;</nav>
      <h3>These are the posts you have made</h3>
      <button onClick={() => navigate("make-post")}>Make a new Post</button>
      {/* <main>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </main> */}
    </div>
  );
};

export default Posts_page;
