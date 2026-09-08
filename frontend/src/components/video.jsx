import { Edit, Trash2 } from "react-feather";
import { Car_Video } from "./car_videos";

const Video = ({ video }) => {
  return (
    <div className="video" key={video.id}>
      <Car_Video
        car_description={video.short_text_description}
        car_image={video.thumbnail_url}
        car_name={video.title}
        car_vid={video.video_url}
      />
      <div className="video-buttons">
        <button title="Edit Video">
          <Edit size={20} />
        </button>
        <button title="Delete Video">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};
export const Videos_Section = ({ videos }) => {
  return (
    <section>
      {videos.length > 0 ? (
        <div className="all-videos">
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
