import React from "react";
import Image1 from "../../../assets/Images/PS1.png";
// import Image2 from "../../../assets/Images/PS2.png";

const Hero = () => {
  return (
    <>
      <div className="px-15 w-full">
        <div className="flex-col space-y-4 justify-center items-center">
          <img className="w-[90vw] rounded-4xl mx-auto " src={Image1} alt="" />
          {/* <img className="w-[90vw] rounded-4xl mx-auto " src={Image2} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
