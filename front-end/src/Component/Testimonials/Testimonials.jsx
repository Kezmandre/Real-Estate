import React from "react";
import { BsStars } from "react-icons/bs";
import { FaStar,FaArrowLeft,FaArrowRight  } from "react-icons/fa";
import { TestimonialData } from "../../assets/Data/Data";
const Testimonials = () => {
  return (
    <div className="m-0 pt-8 Bg font-Urbanist">
      <div className="w-[95%] mx-auto">
        <div className="pt-10 pb-4">
          <BsStars className="text-[#666666] text-xl" />
        </div>
        <div className="flex justify-between items-center pb-6">
          <span>
            <h2 className="text-white font-semibold text-2xl pb-2">
              What Our Clients Says
            </h2>
            <p className="text-[#999] text-sm">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </span>
          <div className="view_btn hidden md:flex text-sm h-[50px] w-[200px] justify-center items-center text-center p-2 text-white cursor-pointer">
            View All Testimonials
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-2 pb-6">
            {TestimonialData?.map((item)=>(
                <div key={item.id} className="w-[400px] h-[310px] ppt_style">
            <div className="flex m-4 gap-2">
              <div className=" flex justify-center items-center w-[30px] h-[30px] star">
                <FaStar className="text-[#FFE500] text-lg" />
              </div>
              <div className=" flex justify-center items-center w-[30px] h-[30px] star">
                <FaStar className="text-[#FFE500] text-lg" />
              </div>
              <div className=" flex justify-center items-center w-[30px] h-[30px] star">
                <FaStar className="text-[#FFE500] text-lg" />
              </div>
              <div className=" flex justify-center items-center w-[30px] h-[30px] star">
                <FaStar className="text-[#FFE500] text-lg" />
              </div>
              <div className=" flex justify-center items-center w-[30px] h-[30px] star">
                <FaStar className="text-[#FFE500] text-lg" />
              </div>
            </div>
            <h2 className="px-4 py-2 text-white text-xl font-semibold">
              {item.title}
            </h2>
            <p className="px-4 py-2 text-md font-medium text-white">
             {item.desc}
            </p>
            <div className=" flex justify-start items-center m-4  gap-2">
              <div className="w-[60px] h-[60px] rounded-full">
                <img src={item.img_path} alt="" className="w-full h-full bg-cover" />
              </div>
              <span className="text-white">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-[#999999]">{item.country}</p>
              </span>
            </div>
          </div>
            ))}
        </div>
        <hr className="pb-2" />
        <div className="flex justify-between items-center">
        <div className="view_btn flex lg:hidden text-sm h-[40px] w-[150px] justify-center items-center p-2 text-white cursor-pointer">
            View All Properties
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
      </div>
    </div>
  );
};

export default Testimonials;
