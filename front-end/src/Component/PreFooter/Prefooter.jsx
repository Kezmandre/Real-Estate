import React from 'react'
import Design_1 from "../../assets/Images/design_1.png";
import Design2 from "../../assets/Images/design_2.png";

const Prefooter = () => {
  return (
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
  )
}

export default Prefooter