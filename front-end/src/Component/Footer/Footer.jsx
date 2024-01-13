import React from "react";
import Logo from "../../assets/Images/Logo.png";
import { LuSend } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs"

export const Footer = () => {
  const date = new Date();
  return (
    <div className="p-0 mt-6 bg-[#141414]">
      <div className="w-[95%] p-8 flex flex-col md:gap-2 md:flex-row md:justify-between">
        <div className="">
          <div className="flex items-center justify-start gap-1 pb-4">
            <img src={Logo} alt="" className="w-[40px]" />
            <p className="text-[#fff] font-Urbanist font-semibold text-3xl">
              Estatein
            </p>
          </div>
          <div className=" relative w-[300px] md:w-[200px] lg:w-[300px] p-1 mb-4 searchInput flex justify-between items-center ">
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
        <div className="">
          <h3 className="text-[#999] pb-4 font-semibold cursor-pointer">
            Home
          </h3>
          <ul className="text-white">
            <li className="pb-1">Hero Sections</li>
            <li className="pb-1">Features</li>
            <li className="pb-1">Properties</li>
            <li className="pb-1">Testimonials</li>{" "}
            <li className="pb-4">FAQ's</li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-[#999] pb-4 font-semibold cursor-pointer">
            About us
          </h3>
          <ul className="text-white">
            <li className="pb-1">Our Story</li>
            <li className="pb-1">Our Works</li>
            <li className="pb-1">How it Works</li>
            <li className="pb-1">Our Team</li>
            <li>Our Clients</li>
          </ul>
        </div>
        <div className="md:flex flex-col">
          <div className="">
            <h3 className="text-[#999] pb-4 lg:pb-2 font-semibold cursor-pointer">
              Properties
            </h3>
            <ul className="text-white">
              <li className="pb-1">Portfolios</li>
              <li className="pb-6">Categories</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-[#999] pb-2 cursor-pointer">
              Contact Us
            </h3>
            <ul className="text-white">
              <li className="pb-1">Contact Form</li>
              <li className="pb">Our Offices</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-[#999] pb-4 font-semibold cursor-pointer">
            Services
          </h3>
          <ul className="text-white gap-2">
            <li className="pb-1">Valuation Mastery</li>
            <li className="pb-1">Strategic Marketing</li>
            <li className="pb-1">Negotiation Wizardry</li>
            <li className="pb-1">Closing Success</li>
            <li className="pb-1">Property Management</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center md:flex-row md:justify-between items-center font-Urbanist text-white p-4 lastFooter">
        <div className=" flex flex-col justify-center items-center mb-6 md:mb-1 md:flex-row gap-4">
          <p>@{date.getFullYear()} Estatein All rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="flex gap-2 mb-8 md:mb-1">
          <div className=" flex justify-center items-center w-[40px] h-[40px] footerIcon cursor-pointer">
            <FaFacebookF className="text-white" />
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] footerIcon cursor-pointer">
            <FaLinkedinIn className="text-white"/>
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] footerIcon cursor-pointer">
            <BsTwitterX className="text-white"/>
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] footerIcon cursor-pointer">
            <FaYoutube className="text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};
