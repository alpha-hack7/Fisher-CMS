import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useVideos } from "../api/video";
import "../css/cars.css";
import Loader from "../sections/components/loader";
import Navigation_bar from "../sections/components/navigation_bar";
export const Car = ({ car_image, car_vid, car_name, car_description }) => {
  const videoRef = useRef(null);
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
  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!isFullscreen && video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      setFullScreen(true);
      video.muted = false;
      video.currentTime = 0;
      video.style.objectFit = "contain";
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
      className="car"
      onMouseEnter={showControls}
      onMouseLeave={hideControls}
    >
      {!isPlaying && (
        <img
          src={car_image}
          alt="Thumbnail"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
            cursor: "pointer",
            zIndex: 2,
          }}
        />
      )}
      <video
        onClick={handleFullScreen}
        poster={car_image}
        src={car_vid}
        muted
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
      ></video>
      <div className="car-info">
        <h3>{car_name}</h3>
        <p>{car_description}</p>
      </div>
    </div>
  );
};
const CarVideos = ({ car_vids }) => {
  return (
    <div className="car-videos">
      {car_vids.map((car) => (
        <Car
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

const Cars = () => {
  const { data: car_vids, isLoading, error } = useVideos();
  useEffect(() => {
    if (error) {
      toast.error("Videos failed to load");
    }
  }, [error]);
  if (isLoading) return <Loader />;
  return (
    <>
      <Navigation_bar />
      <section className="cars">
        <CarVideos car_vids={car_vids} />
      </section>
    </>
  );
};

export default Cars;
