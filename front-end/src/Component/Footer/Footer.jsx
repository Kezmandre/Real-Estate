import React from "react";
import Logo from "../../assets/Images/Logo.png";
import { LuSend } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
export const Footer = () => {
  return (
    <div className="p-0 mt-6 bg-[#141414]">
      <div className="w-[95%] p-8">
        <div className="flex items-center justify-start gap-1 pb-4">
          <img src={Logo} alt="" className="w-[40px]" />
          <p className="text-[#fff] font-Urbanist font-semibold text-3xl">
            Estatein
          </p>
        </div>
        <div className=" relative w-[300px] p-1 mb-4 searchInput flex justify-between items-center ">
          <div className="flex justify-start items-center">
            <MdOutlineMarkEmailUnread className="text-[#999]" />
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" w-[230px] font-Urbanist p-1 bg-inherit outline-none text-[#999]"
            />
          </div>
          <LuSend className="text-white text-2xl mr-2 cursor-pointer" />
        </div>
        <div className="flex flex-col" >
            <div className="flex justify-start font-Urbanist">
                <div className="w-1/2 border-r mr-6 ">
                    <h3 className="text-[#999] pb-4 font-semibold">Home</h3>
                    <ul className="text-white">
                        <li className="pb-1">Hero Sections</li>
                        <li className="pb-1">Features</li>
                        <li className="pb-1">Properties</li>
                        <li className="pb-1">Testimonials</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className="w-1/2">
                    <h3 className="text-[#999] pb-4 font-semibold">About us</h3>
                    <ul className="text-white">
                        <li className="pb-1">Our Story</li>
                        <li className="pb-1">Our Works</li>
                        <li className="pb-1">How it Works</li>
                        <li className="pb-1">Our Team</li>
                        <li>Our Clients</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
