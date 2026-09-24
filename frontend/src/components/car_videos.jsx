import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const Car_Video = ({
  from_video_page = false,
  car_image,
  car_vid,
  car_name,
  car_description,
}) => {
  const videoRef = useRef(null);
  const car_width = from_video_page ? "w-full" : "w-45/100";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setFullScreen] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // Hovering In (ON MOUSE ENTER)
  const showControls = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.style.cursor = "pointer";
    }
  };
  //Hovering Out (ON MOUSE LEAVE)
  const hideControls = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.style.cursor = "default";
    }
  };
  //Clicking the thumbnail of the video to open fullscreen
  const handleFullScreen = async () => {
    const video = videoRef.current;
    if (!isFullscreen && video) {
      try {
        await video.requestFullscreen();
        setFullScreen(true);
        video.muted = false;
        video.currentTime = 0;
        video.style.objectFit = "contain";
      } catch (error) {
        toast.error(
          error || "Fullscreen mode is not supported in this browser.",
        );
      }
    }
  };
  // Exiting fullscreen and resetting to defaults
  useEffect(() => {
    const handleFullscreenChange = () => {
      const video = videoRef.current;
      if (!document.fullscreenElement) {
        if (video) {
          video.muted = true;
          video.style.objectFit = "cover";
        }
        setFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div
      className={`${car_width} group/car relative rounded-2xl`}
      onMouseEnter={showControls}
      onMouseLeave={hideControls}
    >
      {!isPlaying && (
        <img
          src={car_image}
          alt="Thumbnail"
          onClick={handleFullScreen}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl cursor-pointer z-2"
        />
      )}
      <video
        className="w-full h-full object-cover rounded-2xl"
        onClick={handleFullScreen}
        poster={car_image}
        src={car_vid}
        muted
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
      ></video>
      <div className="group-hover/car:opacity-0 absolute bg-black/80 w-full inset-0 opacity-100 z-3 overflow-x-clip py-[0.3rem] px-[0.6rem] rounded-2xl pointer-events-none">
        <h3>{car_name}</h3>
        <p>{car_description}</p>
      </div>
    </div>
  );
};

export const CarVideos = ({ car_vids }) => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-between gap-4">
      {car_vids?.map((car) => (
        <Car_Video
          key={car.id}
          car_image={car.thumbnail_url}
          car_vid={car.video_url}
          car_name={car.title}
          car_description={car.short_text_description}
        />
      ))}
    </div>
  );
};
