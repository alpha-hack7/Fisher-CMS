import Arrow from "../../assets/anchor.png";
// import ArrowLeft as Arrow from "react-feather";
import "./components.css";

export const RightArrow = ({ onClick }) => (
  <div className="arrow right" onClick={onClick}>
    <img src={Arrow} alt="Right Arrow" />
  </div>
);
export const LeftArrow = ({ onClick }) => (
  <div className="arrow left" onClick={onClick}>
    <img src={Arrow} alt="Left Arrow" />
  </div>
);
