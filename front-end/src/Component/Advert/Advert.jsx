import React from "react";
import { BsStars } from "react-icons/bs";

const Advert = () => {
  return (
    <div className="m-0 p-0 border-box">
      <div className="w-full p-2 bg-advert bg-cover border-b border-b-[grey] bg-advertBg flex flex-wrap justify-start md:justify-center items-center">
        <BsStars  className="text-yellow-600"/>
        <p className="text-white text-xs md:text-lg font-Urbanist">
          Discover Your Dream Property with Estatein. <span className="gap-2 underline cursor-pointer italic">Learn More</span>
        </p>
      </div>
    </div>
  );
};

export default Advert;
