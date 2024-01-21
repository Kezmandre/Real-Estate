import React from "react";
import { BsStars } from "react-icons/bs";

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
          <div className="w-[400px] h-[250px] ppt_style">
            <h3 className="pt-8 px-4 text-white font-semibold">
              How do I search for properties on Estatein?
            </h3>
            <p className="px-4 py-4 text-[#999]">
              Learn how to use our user-friendly search tools to find properties
              that match your criteria.
            </p>
            <div className="m-4 w-[100px] p-2 view_btn text-white flex justify-center items-center cursor-pointer">
                Read More
            </div>
          </div>
          <div className="w-[400px] h-[310px] ppt_style"></div>
          <div className="w-[400px] h-[310px] ppt_style"></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
