import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/herosection.css";

const HeroSection = () => {
  useEffect(() => {
    if (window.innerWidth > 744) {
      const HeroSection = document.querySelector(".hero-section");
      const HeroImage = document.querySelector(".hero-image");

      HeroSection.appendChild(HeroImage);
    }
  }, []);
  return (
    <section className="hero-section" id="home">
      <div className="hero-image"></div>
      <div className="hero-text">
        <h1>where engines roar and adventures begin</h1>
        <p>
          I explore cars the way they were meant to be experienced &mdash; on
          the road, in motion, and through the eyes of someone who truly loves
          the craft. Reviews, comparisons, sound tests, and behind-the wheel
          adventures &mdash; all captured and shared one video at a time.
        </p>
        <button className="hero-button">
          <Link to="/car-videos">Watch the Videos</Link>
        </button>
        <small>Honest insights. Real reactions. Pure automotive passion.</small>
      </div>
    </section>
  );
};

export default HeroSection;
