import React from "react";
import { BsStars } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";
import { FaLocationArrow, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsTwitterX, BsEmojiSmileFill } from "react-icons/bs";
import { RiFlashlightFill } from "react-icons/ri";
import About_Hero from "../../assets/Images/About_hero.png";
import Card from "../Card/Card";
import trust from "../../assets/Images/trust.png";
import Menu from "../../assets/Images/menu.png";
import excellence from "../../assets/Images/excellence.png";
import client from "../../assets/Images/client.png";
import {
  AchievementData,
  TeamData,
  navigateData,
} from "../../assets/Data/Data";
import Prefooter from "../PreFooter/Prefooter";
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
          <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center flex-wrap gap-4 mt-8">
            {navigateData?.map((item) => (
              <div
                key={item.id}
                className="bod w-full lg:w-[380px] h-[250px] mb-6 border-l border-l-[#703BF7]"
              >
                <p className=" pl-2 text-white">{item.num}</p>
                <div className="navigate w-full h-[220px] mt-2">
                  <h4 className="text-white font-semibold text-2xl pt-6 px-4">
                    {item.title}
                  </h4>
                  <p className="text-[#999]  p-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="pt-10 pb-4">
            <BsStars className="text-[#666666] text-xl" />
          </div>
          <h3 className="font-semibold text-white py-4 text-2xl">
            Meet the Estatein Team
          </h3>
          <p className="text-[#999] text-lg pb-4">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people <br /> behind our mission to
            make your real estate dreams a reality.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center gap-4 md:flex-wrap lg:flex-wrap">
            {TeamData?.map((item) => (
              <div
                key={item.id}
                className="Team w-full md:w-[280px] lg:w-[280px] h-[370px]"
              >
                <div className="relative w-[260px] h-[180px] mx-auto  mt-4 rounded-md">
                  <img src={item.image} alt="" className="w-full h-full" />
                  <div className="absolute w-[50px] h-[30px] flex justify-center items-center Tweet bottom-[-12px] right-[40%] left-[40%]">
                    <BsTwitterX className="text-white" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-center text-xl py-4">
                  {item.name}
                </h3>
                <p className="text-center text-[#999]">{item.position}</p>
                <div className=" Hello w-[260px] flex justify-between items-center mx-auto p-1 mt-6">
                  <div className=" m-2 flex justify-start items-start gap-1">
                    <p className="text-white">Say Hello</p>
                    <PiHandWaving className="text-2xl text-yellow-600" />
                  </div>
                  <div className="w-[35px] h-[35px] mr-2 flex justify-center items-center rounded-full cursor-pointer bg-[#703BF7]">
                    <FaLocationArrow className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="pt-10 pb-4">
            <BsStars className="text-[#666666] text-xl" />
          </div>
          <h3 className="font-semibold text-white py-4 text-2xl">
            Our Valued Clients
          </h3>
          <p className="text-[#999] text-lg pb-4">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. <br />
            Here are some of the clients we've had the pleasure of serving
          </p>
          <div className="flex flex-col md:flex-row  justify-center items-center gap-12 mb-6 mt-6">
            <div className="values w-full lg:w-[500px]">
              <div className="flex flex-col md:flex-row justify-start lg:justify-between items-start lg:items-center">
                <div className="m-4">
                  <p className="text-[#999]">Since 2019</p>
                  <h3 className="text-2xl text-white font-semibold">
                    ABC Transport
                  </h3>
                </div>
                <div className="view_btn text-lg lg:text-sm h-[50px] w-[95%] mx-auto md:mx-2 my-2 md:w-[150px] flex justify-center items-center  p-2 text-white cursor-pointer">
                  Visit Website
                </div>
              </div>
              <div className=" m-4 flex justify-between items-center">
                <div>
                  <div className="flex justify-start items-center gap-1">
                    <img src={Menu} alt="" />
                    <p className="text-[#999]">Domain</p>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Commercial Real Estate
                  </p>
                </div>
                <div className="border-l border-[#999] p-2">
                  <div className="flex justify-start items-center gap-1">
                    <RiFlashlightFill className="text-[#999]" />
                    <p className="text-[#999]">Category</p>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Luxury Home Development
                  </p>
                </div>
              </div>
              <div className="Team w-5/6 lg:w-[450px] mx-auto mb-4">
                <div className=" m-4 flex justify-start items-center gap-1">
                  <p className="text-[#999]">What They Said</p>
                  <BsEmojiSmileFill className="text-yellow-600" />
                </div>
                <p className="text-white py-4 px-4">
                  Estatein's expertise in finding the perfect office space for
                  our expanding operations was invaluable. They truly understand
                  our business needs.
                </p>
              </div>
            </div>
            <div className="values w-full lg:w-[500px]">
              <div className="flex flex-col md:flex-row justify-start lg:justify-between items-start lg:items-center">
                <div className="m-4">
                  <p className="text-[#999]">Since 2018</p>
                  <h3 className="text-2xl text-white font-semibold">
                    GreenTech Enterprises
                  </h3>
                </div>
                <div className="view_btn mx-auto md:mx-2 my-2 md:flex text-lg lg:text-sm h-[50px] w-[95%] lg:w-[150px] flex justify-center items-center text-center p-2 text-white cursor-pointer">
                  Visit Website
                </div>
              </div>
              <div className=" m-4 flex justify-between items-center">
                <div>
                  <div className="flex justify-start items-center gap-1">
                    <img src={Menu} alt="" />
                    <p className="text-[#999]">Domain</p>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Commercial Real Estate
                  </p>
                </div>
                <div className="border-l border-[#999] p-2">
                  <div className="flex justify-start items-center gap-1">
                    <RiFlashlightFill className="text-[#999]" />
                    <p className="text-[#999]">Category</p>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Retail Space Development
                  </p>
                </div>
              </div>
              <div className="Team w-5/6 lg:w-[450px] mx-auto mb-4">
                <div className=" m-4 flex justify-start items-center gap-1">
                  <p className="text-[#999]">What They Said</p>
                  <BsEmojiSmileFill className="text-yellow-600" />
                </div>
                <p className="text-white py-4 px-4">
                  Estatein's ability to identify prime retail locations helped
                  us expand our brand presence. They are a trusted partner in
                  our growth.
                </p>
              </div>
            </div>
          </div>
          <hr className="pb-2 pt-6" />
          <div className="flex justify-between items-center pb-8">
          <span className="text-white hidden lg:flex gap-1">
            {" "}
            01 <p className="text-[#999]"> of 10 </p>
          </span>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <div className="w-[40px] h-[40px] text-white hover:bg-[#999] nextIcon flex justify-center items-center">
              <FaArrowLeft />
            </div>
            <span className="text-white flex lg:hidden gap-1">
              {" "}
              01 <p className="text-[#999]"> of 10 </p>
            </span>
            <div className="w-[40px] h-[40px] text-white hover:bg-[#999] nextIcon flex justify-center items-center">
              <FaArrowRight />
            </div>
          </div>
          </div>
          <Prefooter/>
        </div>
      </div>
    </div>
  );
};

export default About;
