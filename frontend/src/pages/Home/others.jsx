import { useRef } from "react";
import { Link } from "react-router-dom";
import { LeftArrow, RightArrow } from "../../components/nav_arrow";
import { cards } from "../../data/pictures";

const Picture = ({ Image, description, navigate }) => {
  return (
    <div className="shrink-0 w-37.5 h-full transition-all duration-500 ease-in bg-gray-400 bg-cover bg-center rounded-2xl relative overflow-hidden">
      <img className="w-full h-full object-cover" src={Image} alt="Picture" />
      <div className="absolute bottom-0 bg-black/50 w-full ">
        <p className="text-center">{description}</p>
        <button className="py-1.25 px-2 rounded-lg">
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
    <section>
      <div className="mt-8">
        <q className="italic text-center block text-wrap">
          A great car doesn't just take you places &mdash; it tells a story.
        </q>
        <p className="text-left">
          Outside of being mesmerized by cars, you’ll usually find me chasing
          new adventures, exploring exciting places, creating engaging car
          content, or spending quality time with family and friends. I love
          staying active, seeking new experiences, and making every moment
          count—whether it’s behind the wheel or out in the world.
        </p>
        <div className="my-20 mx-auto h-62.5 w-85/100 relative md:h-75">
          <div
            className="overflow-x-auto flex gap-4 h-full scrollbar-none"
            ref={Pictures}
          >
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
