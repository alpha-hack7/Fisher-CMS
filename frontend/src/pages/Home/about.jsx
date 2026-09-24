import { useEffect, useState } from "react";
import {
  pic_001,
  pic_002,
  pic_003,
  pic_004,
  pic_005,
  pic_006,
  pic_007,
  pic_008,
} from "../../data/pictures";

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
      <div className="md:flex-1 md:h-100 relative w-full h-62.5 overflow-hidden">
        <img
          className="w-4/10 h-7/10 z-1 opacity-50 left-1 absolute top-1/2 -translate-y-1/2 object-cover object-top rounded-2xl"
          src={images[leftIndex]}
          alt="Fisher Andambi"
        />
        <img
          className="left-1/2 -translate-1/2 w-55/100 h-full z-3 absolute top-1/2 -translate-y-1/2 object-cover object-top rounded-2xl"
          src={images[activeIndex]}
          alt="Fisher Andambi"
        />
        <img
          className="w-4/10 h-7/10 z-1 opacity-50 right-1 absolute top-1/2 -translate-y-1/2 object-cover object-top rounded-2xl"
          src={images[rightIndex]}
          alt="Fisher Andambi"
        />
      </div>
    </>
  );
};
const About = () => {
  return (
    <section
      className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center"
      id="about"
    >
      <About_Images />
      <div className="md:flex-1">
        <h2 className="font-semibold text-3xl italic">
          Hi, My name is Fisher Andambi
        </h2>
        <p className="leading-relaxed text-center">
          I am what people call a car fanatic — the kind of person who gets
          excited about engines, design lines, and the feeling of a good drive.
          I love talking about cars in a way that’s real, simple, and fun,
          sharing what makes each ride special and why it matters to people who
          love the road as much as I do.
        </p>
        <p className="leading-relaxed text-center">
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
