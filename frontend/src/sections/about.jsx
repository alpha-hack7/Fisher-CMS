import { useEffect, useState } from "react";
import pic_001 from "../assets/photos/fisher_001.jpeg";
import pic_002 from "../assets/photos/fisher_002.jpeg";
import pic_003 from "../assets/photos/fisher_003.jpeg";
import pic_004 from "../assets/photos/fisher_004.jpeg";
import pic_005 from "../assets/photos/fisher_005.jpeg";
import pic_006 from "../assets/photos/fisher_006.jpeg";
import pic_007 from "../assets/photos/fisher_007.jpeg";
import pic_008 from "../assets/photos/fisher_008.jpeg";
import "../css/about.css";

const About_Images = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const images = [
    pic_001,
    pic_002,
    pic_003,
    pic_004,
    pic_005,
    pic_006,
    pic_007,
    pic_008,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const leftIndex = (activeIndex - 1 + images.length) % images.length;
  const rightIndex = (activeIndex + 1) % images.length;
  return (
    <>
      <div className="carousel">
        <img
          className="side left"
          src={images[leftIndex]}
          alt="Fisher Andambi"
        />
        <img
          className="active"
          src={images[activeIndex]}
          alt="Fisher Andambi"
        />
        <img
          className="side right"
          src={images[rightIndex]}
          alt="Fisher Andambi"
        />
      </div>
    </>
  );
};
const About = () => {
  return (
    <section className="about" id="about">
      <About_Images />
      <div className="about-info">
        <h2>Hi, My name is Fisher Andambi</h2>
        <p>
          I am what people call a car fanatic — the kind of person who gets
          excited about engines, design lines, and the feeling of a good drive.
          I love talking about cars in a way that’s real, simple, and fun,
          sharing what makes each ride special and why it matters to people who
          love the road as much as I do.
        </p>
        <p>
          I’m fascinated by what makes a car truly perform — the engine,
          suspension, brakes, and every part in between. For me, it’s not just
          about the brand or model, but the engineering, craftsmanship, and how
          each component comes together to create an unforgettable driving
          experience. Through my videos, I break down these details, share
          insights, and help others appreciate the heart of every machine.
        </p>
      </div>
    </section>
  );
};

export default About;
