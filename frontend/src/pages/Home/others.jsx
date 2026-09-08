import { useRef } from "react";
import { Link } from "react-router-dom";
import { LeftArrow, RightArrow } from "../../components/nav_arrow";
import { cards } from "../../data/pictures";
import "./css/others.css";

const Picture = ({ Image, description, navigate }) => {
  return (
    <div className="picture">
      <img src={Image} alt="Picture" />
      <div className="pic-info">
        <p>{description}</p>
        <button>
          <Link to={navigate}>See More... </Link>
        </button>
      </div>
    </div>
  );
};
const Others = () => {
  const Pictures = useRef(null);
  const LeftClick = () => {
    Pictures.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  const RightClick = () => {
    Pictures.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  return (
    <section className="others">
      <div className="others-content">
        <q>
          A great car doesn't just take you places &mdash; it tells a story.
        </q>
        <p>
          Outside of being mesmerized by cars, you’ll usually find me chasing
          new adventures, exploring exciting places, creating engaging car
          content, or spending quality time with family and friends. I love
          staying active, seeking new experiences, and making every moment
          count—whether it’s behind the wheel or out in the world.
        </p>
        <div className="others-container">
          <div className="others-pictures" ref={Pictures}>
            {cards.map((picture) => (
              <Picture
                key={picture.id}
                Image={picture.image}
                navigate={picture.nav}
                description={picture.description}
              />
            ))}
          </div>
          <LeftArrow onClick={LeftClick} />
          <RightArrow onClick={RightClick} />
        </div>
      </div>
    </section>
  );
};

export default Others;
