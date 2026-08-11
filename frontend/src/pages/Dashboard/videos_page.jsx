import { useNavigate } from "react-router-dom";
const Videos_page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>Dashboard &gt; Videos &gt;</nav>
      <h2>Your Videos</h2>
      <button onClick={() => navigate("upload-video")}>
        Upload a new video
      </button>
      {/* <main>
        {videos.map((vid) => (
          <div className="video-container" key={vid.id}>
            <button>Delete</button>
          </div>
        ))}
      </main> */}
    </div>
  );
};

export default Videos_page;
