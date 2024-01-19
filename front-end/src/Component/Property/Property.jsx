import React from "react";
import { BsStars } from "react-icons/bs";
import { MdBed, MdHouseSiding } from "react-icons/md";
import { FaBath, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { buildingData } from "../../assets/Data/Data";

const Property = () => {
  return (
    <div className="m-0 pt-10 Bg">
      <div className="w-[95%] mx-auto font-Urbanist">
        <div className="pt-10 pb-4">
          <BsStars className="text-[#666666] text-xl" />
        </div>
        <h2 className="text-white font-semibold text-2xl pb-2">
          Featured Properties
        </h2>
        <div className="flex justify-center mb-8">
          <p className="text-[#999] text-lg flex-grow">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein{" "}
            <span className="hidden md:inline-flex">
              click "View Details" for more information
            </span>
            .
          </p>
          <div className="view_btn hidden md:flex text-sm h-[40px] w-[200px] text-center p-2 text-white cursor-pointer">
            View All Properties
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-4 mb-6">
          {buildingData?.map((item) => (
            <div key={item.id} className="ppt_style h-[500px] w-[380px]">
              <div className="w-[310px]  mx-auto rounded-md">
                <div className="w-full h-full my-4">
                  <img src={item.img_url} alt="" className="w-full bg-cover" />
                </div>
                <h3 className="text-white font-semibold text-xl pb-2">
                  {item.title}
                </h3>
                <p className="text-[#999] text-sm pb-4">
                  {item.desc}
                  <span className="text-white underline underline-offset-4 cursor-pointer">
                    Read More
                  </span>
                </p>
                <div className="flex items-center justify-start gap-1 text-white pb-8">
                  <div className=" flex justify-center items-center w-[115px] p-1  gap-1 ppt_list">
                    <MdBed className="" />
                    <p className="text-sm">{item.bedroom}</p>
                  </div>
                  <div className=" flex justify-center items-center w-[120px] p-1 gap-1 ppt_list">
                    <FaBath className="text-sm" />
                    <p className="text-sm">{item.bathroom}</p>
                  </div>
                  <div className=" flex justify-center items-center w-[90px] p-1 gap-1 ppt_list">
                    <MdHouseSiding className="" />
                    <p className="text-sm text-purple-600">Villa</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#999]">Price</p>
                    <p className="text-white font-semibold text-2xl">
                      {item.price}
                    </p>
                  </div>
                  <div className="Browse flex items-center justify-center w-[180px]  text-center text-white cursor-pointer hover:bg-black">
                    View Property Details
                  </div>
                </div>
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

export default Property;
