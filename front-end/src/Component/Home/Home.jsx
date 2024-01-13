import React from "react";
import Hero_2 from "../../assets/Images/Hero_2.png";
const Home = () => {
  return (
    <div>
      <div className="p-0 m-0 border-box Bg">
        <div className="w-[95%] mx-auto flex flex-col justify-center">
          <div className="w-sm md:w-1/2 h-full homeBg mb-6">
            <div className="w-5/6 h-full mx-auto ">
              <img src={Hero_2} alt="" />
            </div>
          </div>
          <div className="w-sm md:w-1/2 h-full font-Urbanist">
            <h2 className="text-3xl text-start font-semibold text-white pb-4">
              Discover Your Dream <br /> Property with Estatein
            </h2>
            <p className="text-[#999] text-lg mb-6">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex flex-col justify-center gap-2 mb-4 items-center cursor-pointer text-white">
              <div className="w-full p-2 learnMore text-center">Learn More</div>
              <div className="w-full p-2 Browse text-center">
                Browse properties
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="w-[49%] p-8 homeNumber text-center">
                <p className="text-white font-semibold text-2xl">200+</p>
                <p className="text-[#999]">Happy Customers</p>
              </div>
              <div className="w-[49%] p-8 homeNumber text-center">
              <p className="text-white font-semibold text-2xl">10K +</p>
                <p className="text-[#999]">Properties For Clients</p>
              </div>
              <div className="w-full p-8 mb-4 homeNumber text-center">
              <p className="text-white font-semibold text-2xl">16+</p>
                <p className="text-[#999]">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
