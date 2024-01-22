import React from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { faqData } from "../../assets/Data/Data";
import Design_1 from "../../assets/Images/design_1.png";
import Design2 from "../../assets/Images/design_2.png";

const Faq = () => {
  return (
    <div className="m-0 pt-8 Bg font-Urbanist">
      <div className="w-[95%] mx-auto">
        <div className="pt-10 pb-4">
          <BsStars className="text-[#666666] text-xl" />
        </div>
        <div className="flex justify-between items-center pb-6">
          <span>
            <h2 className="text-white font-semibold text-2xl pb-2">
              Frequently Asked Question
            </h2>
            <p className="text-[#999] text-md">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. <br /> We're here
              to provide clarity and assist you every step of the way.
            </p>
          </span>
          <div className="view_btn hidden md:flex text-sm h-[50px] w-[200px] justify-center items-center text-center p-2 text-white cursor-pointer">
            View All FAQ's
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-2 pb-6">
          {faqData?.map((item) => (
            <div key={item.id} className="w-[400px] h-[250px] ppt_style">
              <h3 className="pt-8 px-4 text-white font-semibold">
                {item.name}
              </h3>
              <p className="px-4 py-4 text-[#999]">{item.desc}</p>
              <div className="m-4 w-[100px] p-2 view_btn text-white flex justify-center items-center cursor-pointer">
                Read More
              </div>
            </div>
          ))}
        </div>
        <hr className="pb-2" />
        <div className="flex justify-between items-center pb-8">
          <div className="view_btn flex lg:hidden text-sm h-[40px] w-[150px] justify-center items-center p-2 text-white cursor-pointer">
            View All FAQ's
          </div>
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
        <div className="relative  mt-4 pb-4 Border">
          <div className="w-[95%] mx-auto p-8 flex flex-col md:flex-row justify-center items-center gap-6 z-10">
            <div className="text-white z-10">
              <h3 className="py-4 font-semibold text-3xl">Start Your Real Estate Journey Today</h3>
              <p className="text-lg">
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Estatein is here to assist you every step of the way.
                Take  the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>
            </div>
            <div className="Browse flex justify-center items-center z-10 text-center w-full lg:w-[400px]  h-[50px]   text-white cursor-pointer hover:bg-black">
              <p>Explore properties</p>
            </div>
          </div>
          <div className="absolute top-[-10px] left-0">
            <img
              src={Design_1}
              alt=""
              className=" w-sm lg:w-[500px] h-[180px]"
            />
          </div>
          <div className="absolute top-0 right-0">
            <img src={Design2} alt="" className="w-sm lg:w-[500px] h-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
