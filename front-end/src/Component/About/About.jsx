import React from "react";
import { BsStars } from "react-icons/bs";
import About_Hero from "../../assets/Images/About_hero.png"
import Card from "../Card/Card";
const About = () => {
  return (
    <div className="m-0 p-0 font-Urbanist Bg">
      <div className="w-[95%] mx-auto">
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <div className="pt-10 pb-4">
              <BsStars className="text-[#666666] text-xl" />
            </div>
            <h2 className="font-semibold text-3xl text-white py-4">Our Journey</h2>
            <p className="text-[#999] py-4">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <Card/>
          </div>
          <div className="w-1/2  mt-6">
            <div className="w-[95%] mx-auto bg-advert bg-cover  border rounded-md">
              <img src={About_Hero} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
