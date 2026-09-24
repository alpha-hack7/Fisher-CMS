import { Edit, Trash2 } from "react-feather";
import { Car_Video } from "./car_videos";

const Video = ({ video }) => {
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
      <div className="absolute top-0 right-0">
        <button
          className="bg-transparent opacity-0 transition-opacity duration-1000 border-[#555] border group-hover/video:opacity-100"
          title="Edit Video"
        >
          <Edit size={20} />
        </button>
        <button
          className="bg-transparent opacity-0 transition-opacity duration-1000 border-[#555] border group-hover/video:opacity-100"
          title="Delete Video"
        >
          <Trash2 size={20} />
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
            <Video video={video} key={video.id} />
          ))}
        </div>
      ) : (
        <p>No Videos Found</p>
      )}
    </section>
  );
};
