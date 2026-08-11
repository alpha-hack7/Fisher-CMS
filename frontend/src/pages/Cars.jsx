import { useEffect, useRef, useState } from "react";
import car_01 from "../assets/advertisements/vid_001.mp4";
import car_02 from "../assets/advertisements/vid_002.mp4";
import car_03 from "../assets/advertisements/vid_003.mp4";
import car_04 from "../assets/advertisements/vid_004.mp4";
import car_05 from "../assets/advertisements/vid_005.mp4";
import car_06 from "../assets/advertisements/vid_006.mp4";
import car_07 from "../assets/advertisements/vid_007.mp4";
import car_08 from "../assets/advertisements/vid_008.mp4";
import "../css/cars.css";
import Navigation_bar from "../sections/components/navigation_bar";
const cars = [
  {
    id: 1,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_01,
  },
  {
    id: 2,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_02,
  },
  {
    id: 3,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_03,
  },
  {
    id: 4,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_04,
  },
  {
    id: 5,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_05,
  },
  {
    id: 6,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_06,
  },
  {
    id: 7,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_07,
  },
  {
    id: 8,
    name: "Car One",
    description: "This is the first car.",
    thumbnail: "videos/GT.jpg",
    video: car_08,
  },
];
const Car = ({ car_image, car_vid, car_name, car_description }) => {
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
const CarVideos = () => {
  return (
    <div className="car-videos">
      {cars.map((car) => (
        <Car
          key={car.id}
          car_image={car.thumbnail}
          car_vid={car.video}
          car_name={car.name}
          car_description={car.description}
        />
      ))}
    </div>
  );
};

const Cars = () => {
  return (
    <>
      <Navigation_bar />
      <section className="cars">
        <CarVideos />
      </section>
    </>
  );
};

export default Cars;
