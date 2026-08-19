import { useNavigate } from "react-router-dom";
import { Videos_Section } from "./drafts_page";
const Videos_page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>Dashboard &gt; Videos &gt;</nav>
      <Videos_Section videos={[]} />
      <button onClick={() => navigate("upload-video")}>
        Upload a new video
      </button>
    </div>
  );
};

export default Videos_page;
