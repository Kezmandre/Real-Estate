import React from 'react'
import Logo from "../../assets/Images/Logo.png"
import { navInfo } from '../../assets/Data/Data'

const Navigation = () => {
  return (
    <div className='p-0 m-0 navBg border-b'>
      <div className='w-[95%] p-2 mx-auto flex justify-between items-center'>
        <div className='flex items-center justify-start gap-1'>
          <img src={Logo} alt="" />
          <p className='text-[#fff] font-Urbanist font-semibold text-3xl'>Estatein</p>
        </div>
        <div className='flex items-center justify-start gap-4'>
          {navInfo.map((item)=>{
            return(
              <div key={item.id} className=' p-2 hover:hoverBg cursor-pointer'>
            <p className='font-Urbanist text-[#fff] text-xl font-medium'>{item.name}</p>
          </div>
            )
          })}
          
        </div>
        <div className=' p-2 hoverBg cursor-pointer'>
          <button className='text-[#fff] font-Urbanist text-xl'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation