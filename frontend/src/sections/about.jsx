import Img_001 from "../assets/about/img_001.png";
import Img_002 from "../assets/about/img_002.png";
import Img_003 from "../assets/about/img_003.png";
import "../css/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-images">
        <div className="image">
          <img src={Img_001} alt="Fisher Andambi" />
        </div>
        <div className="image active">
          <img src={Img_002} alt="Fisher Andambi" />
        </div>
        <div className="image">
          <img src={Img_003} alt="Fisher Andambi" />
        </div>
      </div>
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
