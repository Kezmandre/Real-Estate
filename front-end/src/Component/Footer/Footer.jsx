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
        <div className=" relative w-[300px] p-1 searchInput flex justify-between items-center">
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
      </div>
    </div>
  );
};
