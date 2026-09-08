import { ArrowLeft, ArrowRight } from "react-feather";
import "./css/components.css";

export const RightArrow = ({ onClick }) => (
  <div className="arrow right" onClick={onClick}>
    <ArrowRight size={25} color="black" />
  </div>
);
export const LeftArrow = ({ onClick }) => (
  <div className="arrow left" onClick={onClick}>
    <ArrowLeft size={25} color="black" />
  </div>
);
