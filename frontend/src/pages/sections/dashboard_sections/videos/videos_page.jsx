import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../../components/loader";
import { Videos_Section } from "../../../../components/video";
import { useVideos } from "../../../../hooks/useVideos";

const Videos_page = () => {
  const navigate = useNavigate();
  const { data: videos, isLoading, error } = useVideos();
  useEffect(() => {
    if (error) {
      toast.error("Videos failed to load");
    }
  }, [error]);
  return (
    <div>
      <nav id="dash-nav">Dashboard &gt; Videos &gt;</nav>
      <h2 className="m-4">Videos</h2>
      {isLoading ? <Loader /> : <Videos_Section videos={videos} />}
      <button
        onClick={() => navigate("upload-video")}
        className="float-right mr-12"
      >
        Upload a new video
      </button>
    </div>
  );
};

export default Videos_page;
