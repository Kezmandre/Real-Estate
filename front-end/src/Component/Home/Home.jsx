import React from "react";
import Hero_2 from "../../assets/Images/Hero_2.png";
import { PiArrowUpRightBold } from "react-icons/pi";
import Sub_Container from "../../assets/Images/Sub_Container.png";
import { propertyData } from "../../assets/Data/Data";
const Home = () => {
  return (
    <div>
      <div className="p-0 m-0 border-box Bg">
        <div className="relative w-[95%] mx-auto flex flex-col justify-center md:flex-row-reverse pb-8">
          <div className="w-sm md:w-1/2 h-full homeBg mb-6">
            <div className="w-5/6 h-full mx-auto ">
              <img src={Hero_2} alt="" className="bg-cover" />
            </div>
          </div>
          <div className="w-sm md:w-1/2 h-full font-Urbanist bg ">
            <h2 className="text-3xl text-start font-semibold text-white pb-4 md:mt-10">
              Discover Your Dream <br /> Property with Estatein
            </h2>
            <p className="text-[#999] text-lg  mb-6">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:justify-start  gap-2 my-6 items-center cursor-pointer text-white">
              <div className="w-full md:w-[200px] p-3 learnMore text-center">
                Learn More
              </div>
              <div className="w-full md:w-[200px] p-3 Browse text-center">
                Browse properties
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 mb-4 ">
              <div className="w-[49%] md:w-[300px] p-2 h-[150px] homeNumber text-center md:text-start">
                <p className="text-white font-semibold pt-8 text-2xl">200+</p>
                <p className="text-[#999]">Happy Customers</p>
              </div>
              <div className="w-[49%] md:w-[300px] p-2 h-[150px] homeNumber text-center md:text-start">
                <p className="text-white font-semibold text-2xl pt-8">10K +</p>
                <p className="text-[#999]">Properties For Clients</p>
              </div>
              <div className="w-full md:w-[300px] p-2 h-[150px] mb-4 md:mb-0 homeNumber text-center md:text-start">
                <p className="text-white font-semibold text-2xl pt-8">16+</p>
                <p className="text-[#999]">Years of Experience</p>
              </div>
            </div>
            <div className="absolute top-20 right[50%] left-[50%] w-[80px] h-[80px] rounded-full">
              <img
                src={Sub_Container}
                alt=""
                className=" w-full h-full bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="prop_ppt w-full flex justify-center flex-wrap md:flex-nowrap gap-2">
        {propertyData?.map((data) => {
          return (
            <div
              key={data.id}
              className=" w-[200px] md:w-[300px] m-2 h-[140px] inner_ppt"
            >
              <div className="flex justify-end items-start">
                <PiArrowUpRightBold className="text-[#4d4d4d] text-xl m-2" />
              </div>
              <div className="w-[50px] h-[50px] mx-auto rounded-full mb-2">
                <img src={data.img_url} alt="" className="bg-cover" />
              </div>
              <p className="text-white font-Urbanist text-sm text-center">
                {data.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
