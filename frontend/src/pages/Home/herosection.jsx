import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero_Image from "../../assets/hero-image.png";

const HeroSection = () => {
  useEffect(() => {
    if (window.innerWidth > 744) {
      const HeroSection = document.getElementById("home");
      const HeroImage = document.getElementById("hero-image");

      HeroSection.appendChild(HeroImage);
    }
  }, []);
  return (
    <section
      className="flex flex-col md:flex-row md:justify-between md:gap-8 mb-12"
      id="home"
    >
      <div
        id="hero-image"
        className="md:flex-1 md:h-75 md:rounded-2xl w-full h-62.5 bg-center bg-cover bg-no-repeat mt-1"
        style={{ backgroundImage: `url(${Hero_Image})` }}
      ></div>
      <div className="md:flex-1 flex flex-col gap-4">
        <h1 className="text-3xl text-left capitalize leading-relaxed">
          where engines roar and adventures begin
        </h1>
        <p className="text-left leading-relaxed">
          I explore cars the way they were meant to be experienced &mdash; on
          the road, in motion, and through the eyes of someone who truly loves
          the craft. Reviews, comparisons, sound tests, and behind-the wheel
          adventures &mdash; all captured and shared one video at a time.
        </p>
        <button className="md:w-40 md:h-12 md:leading-relaxed w-30 h-10 rounded-2xl leading-relaxed">
          <Link to="/car-videos">Watch the Videos</Link>
        </button>
        <small className="block italic text-left leading-relaxed">
          Honest insights. Real reactions. Pure automotive passion.
        </small>
      </div>
    </section>
  );
};

export default HeroSection;
