import { Edit, Trash2 } from "react-feather";
import { Car_Video } from "./car_videos";
import { delete_video } from "../api/video";
import { toast } from "react-toastify";

const Video = ({ video, video_id }) => {
  const id = video_id;
  const deleteVideo = async () => {
    try {
      await delete_video(id);
      toast.success("Video deleted successfully");
    } catch (error) {
      toast.error(error | "Something went wrong");
    }
  };
  return (
    <div
      className="group/video bg-transparent w-62.5 relative rounded-2xl"
      key={video.id}
    >
      <Car_Video
        from_video_page={true}
        car_description={video.short_text_description}
        car_image={video.thumbnail_url}
        car_name={video.title}
        car_vid={video.video_url}
      />
      <div className="absolute top-0 right-0 flex gap-4">
        <button
          className="bg-black/80 opacity-0 transition-opacity duration-1000 border-[#999] border group-hover/video:opacity-100"
          title="Edit Video"
        >
          <Edit size={20} className="text-white" />
        </button>
        <button
          className="bg-black/80 opacity-0 transition-opacity duration-1000 border-[#999] border group-hover/video:opacity-100"
          title="Delete Video"
          onClick={deleteVideo}
        >
          <Trash2 size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};
export const Videos_Section = ({ videos }) => {
  return (
    <section className="mt-4 pb-4 h-[75dvh] overflow-y-auto overflow-x-hidden scrollbar-none">
      {videos.length > 0 ? (
        <div className="flex flex-row justify-center flex-wrap gap-4 mb-4">
          {videos.map((video) => (
            <Video video={video} key={video.id} video_id={video.id} />
          ))}
        </div>
      ) : (
        <p>No Videos Found</p>
      )}
    </section>
  );
};
