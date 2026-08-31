import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useVideos } from "../../api/video";
import Loader from "../../sections/components/loader";
import { Videos_Section } from "./drafts_page";
const Videos_page = () => {
  const navigate = useNavigate();
  const { data: videos, isLoading, error } = useVideos();
  useEffect(() => {
    if (error) {
      toast.error("Videos failed to load");
    }
  }, [error]);
  if (isLoading) return <Loader />;
  return (
    <div>
      <nav>Dashboard &gt; Videos &gt;</nav>
      <Videos_Section videos={videos} />
      <button
        onClick={() => navigate("upload-video")}
        className="upload-video-btn"
      >
        Upload a new video
      </button>
    </div>
  );
};

export default Videos_page;
