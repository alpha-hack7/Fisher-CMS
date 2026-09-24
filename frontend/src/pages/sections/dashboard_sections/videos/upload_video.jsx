import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { upload_video } from "../../../../api/video";
import Loader from "../../../../components/loader";
import {
  Category,
  New_Category,
  Save_Draft_Video_Dialog,
  Upload_Video_Dialog,
} from "../dialogs";

const Upload_video = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("upload");
  const [video, setVideo] = useState(null);
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    title: "",
    short_text: "",
  });
  const upload_video_ref = useRef(null);
  const save_draft_video_ref = useRef(null);

  const handleSubmit = async (video_status) => {
    const formData = new FormData();
    setLoading(true);
    formData.append("thumbnail", videoThumbnail);
    formData.append("video", video);
    formData.append("title", content.title);
    formData.append("short_text", content.short_text);
    formData.append("category", category);
    formData.append("status", video_status);
    try {
      await upload_video(formData);
      toast.success("Video uploaded successfully");
    } catch (error) {
      toast.error(error || "Video upload failed");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      if (status === "upload") {
        upload_video_ref.current?.showModal();
      } else if (status === "draft") {
        save_draft_video_ref.current?.showModal();
      }
    }
  }, [open, status]);
  const handleChange = (e) => {
    setContent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  if (loading) return <Loader />;
  return (
    <article className="overflow-y-auto scrollbar-none">
      <nav id="dash-nav">Dashboard &gt; Videos &gt; Upload Video &gt;</nav>
      <div className="mt-4 mx-auto p-5 border-[#ccc] rounded-[5px] bg-secondary">
        <form className="flex flex-col gap-4 relative">
          <Category setCategory={setCategory} />
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={content.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="short_text">Short Text (About):</label>
            <textarea
              name="short_text"
              id="short_text"
              cols="30"
              rows="3"
              value={content.short_text}
              onChange={handleChange}
            ></textarea>
          </div>
          <section className="flex flex-col sm:flex-row gap-4 p-8 justify-center">
            <div className="flex flex-col min-h-fit max-h-75 max-w-75 w-fit bg-primary rounded-2xl p-4">
              <label htmlFor="video-thumbnail">Video Thumbnail:</label>
              <input
                type="file"
                name="thumbnail"
                id="video-thumbnail"
                accept="image/*"
                className="bg-amber-500"
                onChange={(e) => setVideoThumbnail(e.target.files[0])}
              />
              {videoThumbnail && (
                <img
                  className="w-full h-full object-contain"
                  src={URL.createObjectURL(videoThumbnail)}
                />
              )}
            </div>
            <div className="flex max-w-75 flex-col min-h-fit max-h-75 w-full bg-primary rounded-2xl p-4">
              <label htmlFor="import-video">Import Video</label>
              <input
                type="file"
                className="bg-amber-500"
                name="import-video"
                accept="video/*"
                id="import-video"
                onChange={(e) => setVideo(e.target.files[0])}
              />
              {video && (
                <video
                  className="aspect-video h-full w-full object-contain"
                  src={URL.createObjectURL(video)}
                />
              )}
            </div>
          </section>
          <New_Category />
          <div className="flex gap-4 mt-4">
            <button
              className="w-fit"
              type="button"
              onClick={() => {
                setOpen(true);
                setStatus("upload");
              }}
            >
              Upload Video
            </button>
            <button
              className="w-fit"
              type="button"
              onClick={() => {
                setStatus("draft");
                setOpen(true);
              }}
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>
      {open &&
        (status === "upload" ? (
          <Upload_Video_Dialog
            title={content.title}
            upload_ref={upload_video_ref}
            onUpload={handleSubmit}
            setOpen={setOpen}
          />
        ) : (
          <Save_Draft_Video_Dialog
            title={content.title}
            save_draft_ref={save_draft_video_ref}
            onUpload={handleSubmit}
            setOpen={setOpen}
          />
        ))}
    </article>
  );
};

export default Upload_video;
