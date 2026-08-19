import { useNavigate } from "react-router-dom";
import { Posts_Section } from "./drafts_page";

const Posts_page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>Dashboard &gt; Posts &gt;</nav>
      <Posts_Section posts={[]} />
      <button onClick={() => navigate("make-post")}>Make a new Post</button>
    </div>
  );
};

export default Posts_page;
