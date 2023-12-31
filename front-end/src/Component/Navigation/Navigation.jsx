import React, { useState } from "react";
import Logo from "../../assets/Images/Logo.png";
import { navInfo } from "../../assets/Data/Data";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState();

  const showToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="relative p-0 m-0 navBg border-b">
        <div className="w-[95%] p-2 mx-auto flex justify-between items-center">
          <div className="flex items-center justify-start gap-1">
            <img src={Logo} alt="" className="w-[30px] md:w-[40px]" />
            <p className="text-[#fff] font-Urbanist font-semibold text-2xl md:text-3xl">
              Estatein
            </p>
          </div>
          <div className=" hidden md:flex flex-wrap items-center justify-start gap-4">
            {navInfo.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" p-2 hover:hoverBg cursor-pointer"
                >
                  <p className="font-Urbanist text-[#fff] md:text-lg lg:text-xl font-medium">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex flex-wrap p-2 hoverBg cursor-pointer">
            <button className="text-[#fff] font-Urbanist md:text-lg lg:text-xl">
              Contact Us
            </button>
          </div>
        </div>
        <div className="absolute top-2 right-4 md:hidden">
          <HiMenuAlt3 className="text-white text-3xl cursor-pointer" onClick={showToggle} />
        </div>
      </div>
      {toggle ? (
        <div className="md:hidden fixed w-screen h-screen bg-advert bg-no-repeat  top-0 right-0 navBg duration-[950ms] z-20">
           <div className="flex items-center justify-start gap-1 m-2">
            <img src={Logo} alt="" className="w-[40px]" />
            <p className="text-[#fff] font-Urbanist font-semibold text-3xl">
              Estatein
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <ImCancelCircle
              onClick={showToggle}
              className="text-3xl text-white cursor-pointer hover:text-red-600"
            />
          </div>
          <div className="m-10 text-white w-1/2" onClick={showToggle}>
            {navInfo.map((item) => {
              return (
                <ul
                  className=" w-[200px] font-Urbanist hover:hoverBg cursor-pointer p-4  text-xl"
                  key={item.id}
                >
                  <Link to={item.path}>
                    <li>{item.name}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
          <Link to="/contact">
          <div className="m-10 w-[200px] p-4 hoverBg cursor-pointer">
            <button className="text-[#fff] font-Urbanist md:text-lg lg:text-xl">
              Contact Us
            </button>
          </div>
          </Link>
        </div>
      ) : (
        <div className="duration-[350ms] right-[-100%]">{""}</div>
      )}
    </>
  );
};

export default Navigation;
