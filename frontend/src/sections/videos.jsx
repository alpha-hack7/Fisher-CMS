import { useState } from "react";
import car_001 from "../assets/car_videos/car_001.jpg";
import car_002 from "../assets/car_videos/car_002.jpg";
import car_003 from "../assets/car_videos/car_003.jpg";
import car_004 from "../assets/car_videos/car_004.jpg";
import car_005 from "../assets/car_videos/car_005.jpg";
import "../css/videos.css";
import { LeftArrow, RightArrow } from "./components/nav_arrow.jsx";

const cars = [
  {
    car_type: car_001,
    name: "2022 Ford Mustang GT Review",
    description:
      "A comprehensive review of the 2022 Ford Mustang GT, covering performance, design, and driving experience.",
  },
  {
    car_type: car_002,
    name: "2022 Ford Mustang GT Review",
    description:
      "A comprehensive review of the 2022 Ford Mustang GT, covering performance, design, and driving experience.",
  },
  {
    car_type: car_003,
    name: "2022 Ford Mustang GT Review",
    description:
      "A comprehensive review of the 2022 Ford Mustang GT, covering performance, design, and driving experience.",
  },
  {
    car_type: car_004,
    name: "2022 Ford Mustang GT Review",
    description:
      "A comprehensive review of the 2022 Ford Mustang GT, covering performance, design, and driving experience.",
  },
  {
    car_type: car_005,
    name: "2022 Ford Mustang GT Review",
    description:
      "A comprehensive review of the 2022 Ford Mustang GT, covering performance, design, and driving experience.",
  },
];
const Car = ({ car_type, name, description }) => {
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <img src={car_type} alt="Car Image" />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
const Videos = () => {
  const [offset, setOffset] = useState(0);
  const totalSlides = cars.length;

  const handleLeftClick = () => {
    setOffset((prev) => Math.max(prev - 1, 0));
  };
  const handleRightClick = () => {
    setOffset((prev) => Math.min(prev + 1, totalSlides - 1));
  };
  return (
    <section className="videos-section" id="videos">
      <h2>Cars</h2>
      <div className="videos-container">
        <div id="co">
          <LeftArrow onClick={handleLeftClick} />
          <div
            className="container"
            style={{ transform: `translateX(-${offset * 80}vw)` }}
          >
            {cars.map((car, index) => (
              <Car
                key={index}
                name={car.name}
                description={car.description}
                car_type={car.car_type}
              />
            ))}
          </div>
          <RightArrow onClick={handleRightClick} />
        </div>
      </div>
      {/* <button className="view-all">
        <Link to="/car-videos">View Videos</Link>
      </button> */}
    </section>
  );
};

export default Videos;
