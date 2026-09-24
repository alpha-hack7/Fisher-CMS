import { ArrowLeft, ArrowRight } from "react-feather";

export const RightArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-5 w-[clamp(20px,calc(2.27vw+12.7px),40px)] h-[clamp(20px,calc(2.27vw+12.7px),40px)] rounded-full z-9 flex items-center justify-center bg-white cursor-pointer active:bg-[aqua]"
    onClick={onClick}
  >
    <ArrowRight size={25} className="text-black" />
  </div>
);
export const LeftArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-5 w-[clamp(20px,calc(2.27vw+12.7px),40px)] h-[clamp(20px,calc(2.27vw+12.7px),40px)] rounded-full z-9 flex items-center justify-center bg-white cursor-pointer active:bg-[aqua]"
    onClick={onClick}
  >
    <ArrowLeft size={25} className="text-black" />
  </div>
);
