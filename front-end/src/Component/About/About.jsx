import React from "react";
import { BsStars } from "react-icons/bs";
import About_Hero from "../../assets/Images/About_hero.png";
import Card from "../Card/Card";
import trust from "../../assets/Images/trust.png";
import excellence from "../../assets/Images/excellence.png";
import client from "../../assets/Images/client.png";
import { AchievementData, navigateData } from "../../assets/Data/Data";
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
        <div className="flex justify-start flex-col lg:flex-row gap-2 items-center my-4">
          <div className=" w-full lg:w-[700px] p-4">
            <div className="pt-10 pb-4">
              <BsStars className="text-[#666666] text-xl" />
            </div>
            <h3 className="text-white py-4 font-semibold text-2xl">
              Our Values
            </h3>
            <p className="text-[#999]">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="w-full lg:w-grow p-4 mt-10 values">
            <div className="w-[95%] mx-auto">
              <div className="flex flex-col lg:flex-row justify-center lg:border-b border-b-[#999] pb-2  items-center mb-2">
                <div className="w-full lg:w-1/2 border-b lg:border-r  lg:border-b-0 border-b-[#999] p-4  h-[150px] mb-4 lg:mb-0">
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <div className="w-[40px] h-[40px] circle flex justify-center items-center">
                      <img src={trust} alt="" />
                    </div>
                    <p className="text-white font-semibold text-xl">Trust</p>
                  </div>
                  <p className="text-[#999] ">
                    Trust is the cornerstone of every successful real estate
                    transaction.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 border-b lg:border-b-0 border-b-[#999] p-4 h-[150px]">
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <div className="w-[40px] h-[40px] circle flex justify-center items-center">
                      <img src={excellence} alt="" />
                    </div>
                    <p className="text-white font-semibold text-xl">
                      Excellence
                    </p>
                  </div>
                  <p className="text-[#999]">
                    We set the bar high for ourselves. From the properties we
                    list to the services we provide.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center ">
                <div className="w-full lg:w-1/2 border-b border-b-[#999] lg:border-b-0 lg:border-r p-6">
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <div className="w-[40px] h-[40px] flex justify-center items-center circle">
                      <img src={client} alt="" />
                    </div>
                    <p className="text-white font-semibold text-xl">
                      Client-Centric
                    </p>
                  </div>
                  <p className="text-[#999]">
                    Your dreams and needs are at the center of our universe. We
                    listen, understand.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 p-6 ">
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <div className="w-[40px] h-[40px] circle flex justify-center items-center">
                      <img src={trust} alt="" />
                    </div>
                    <p className="text-white font-semibold text-xl">
                      Our Commitment
                    </p>
                  </div>
                  <p className="text-[#999]">
                    We are dedicated to providing you with the highest level of
                    service, professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="pt-10 pb-4">
            <BsStars className="text-[#666666] text-xl" />
          </div>
          <h3 className="font-semibold text-white py-4 text-2xl">
            Our Achievement
          </h3>
          <p className="text-[#999] text-lg pb-4">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, <br /> determined to create a real
            estate platform that transcended the ordinary.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-6 gap-8">
            {AchievementData?.map((item) => (
              <div key={item.id} className="values w-full lg:w-[370px] p-6">
                <h3 className="font-semibold text-3xl text-white py-4">
                  {item.title}
                </h3>
                <p className="text-[#999] pb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="pt-10 pb-4">
            <BsStars className="text-[#666666] text-xl" />
          </div>
          <h3 className="font-semibold text-white py-4 text-2xl">
            Navigating the Estatein Experience
          </h3>
          <p className="text-[#999] text-lg pb-4">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your <br /> dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
          <div className="flex flex-col lg:flex-row justify-start items-center flex-wrap gap-4 mt-8">
            {navigateData?.map((item) => (
              <div key={item.id} className="bod w-full lg:w-[380px] h-[250px] mb-6 border-l border-l-[#703BF7]">
                <p className=" pl-2 text-white">{item.num}</p>
                <div className="navigate w-full h-[220px] mt-2">
                  <h4 className="text-white font-semibold text-2xl pt-6 px-4">
                    {item.title}
                  </h4>
                  <p className="text-[#999]  p-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
