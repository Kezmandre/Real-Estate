import React from "react";
import { BsStars } from "react-icons/bs";
import About_Hero from "../../assets/Images/About_hero.png";
import Card from "../Card/Card";
const About = () => {
  return (
    <div className="m-0 p-0 font-Urbanist Bg">
      <div className="w-[95%] mx-auto">
        <div className="w-full flex justify-center items-center flex-col-reverse lg:flex-row gap-4 mb-6">
          <div className=" w-sm lg:w-1/2">
            <div className="pt-10 pb-4">
              <BsStars className="text-[#666666] text-xl" />
            </div>
            <h2 className="font-semibold text-3xl text-white py-4">
              Our Journey
            </h2>
            <p className="text-[#999] py-4">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <Card />
          </div>
          <div className="w-sm lg:w-1/2  mt-8">
            <div className="w-[95%] mx-auto border-[1px] border-[#999] rounded-md">
              <img src={About_Hero} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-col lg:flex-row gap-2 items-center mt-4">
          <div className=" w-full lg:w-[450px] p-4">
            <div className="pt-10 pb-4">
              <BsStars className="text-[#666666] text-xl" />
            </div>
            <h3 className="text-white py-4 font-semibold text-2xl">Our Values</h3>
            <p className="text-[#999]">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="w-full lg:grow p-4 values">
            <div className="w-[95%] mx-auto">
              <div className="flex justify-center  items-center mb-2 gap-2">
              <div className="w-full lg:w-1/2 p-6 bg-red-400">
                <div className="flex justify-start items-center gap-2">
                  <div className="w-[40px] h-[40px] circle"></div>
                  <p className="text-white font-semibold text-xl">Trust</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-6 bg-purple-500"></div>
              </div>
              <div className="flex justify-center  items-center gap-2">
              <div className="w-full lg:w-1/2 p-6 bg-green-400"></div>
              <div className="w-full lg:w-1/2 p-6 bg-pink-500"></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
