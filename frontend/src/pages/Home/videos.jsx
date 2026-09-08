import { useState } from "react";
import { LeftArrow, RightArrow } from "../../components/nav_arrow.jsx";
import { cars } from "../../data/cars.js";
import "./css/videos.css";

const Car_Picture = ({ car_type, name, description }) => {
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
              <Car_Picture
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
