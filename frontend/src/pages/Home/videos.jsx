import { useState } from "react";
import { LeftArrow, RightArrow } from "../../components/nav_arrow.jsx";
import { cars } from "../../data/cars.js";

const Car_Picture = ({ car_type, name, description }) => {
  return (
    <div className="group/car-item w-[80dvw] min-w-[80dvw] h-75 relative rounded-2xl bg-secondary sm:h-[80dvh]">
      <div className="w-full h-full bg-cover bg-center">
        <img
          className="w-full h-full object-contain object-top rounded-2xl sm:object-cover sm:object-center"
          src={car_type}
          alt="Car Image"
        />
      </div>
      <h3 className="group-hover/car-item:bg-transparent group-hover/car-item:-translate-y-15 absolute bottom-2.5 left-2.5 bg-[#333]">
        {name}
      </h3>
      <p className="group-hover/car-item:opacity-100 group-hover/car-item:text-left group-hover/car-item:translate-y-0 absolute bottom-2.5 left-2.5 opacity-0 translate-y-3.75 transition-all duration-300 ease-in-out">
        {description}
      </p>
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
    <section className="mb-4" id="videos">
      <h2 className="mb-4 font-semibold text-3xl italic text-left">Cars</h2>
      <div className="relative w-[80dvw] mx-auto">
        <div id="co" className="overflow-hidden">
          <LeftArrow onClick={handleLeftClick} />
          <div
            className="flex scrollbar-none"
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
