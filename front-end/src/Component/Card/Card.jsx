import React from 'react'

const Card = () => {
  return (
    <div>
         <div className="flex flex-wrap justify-center lg:flex-nowrap gap-2 mt-4 mb-4 ">
              <div className="xs:w-full sm:w-[49%] md:w-[300px] p-2 h-[130px] homeNumber text-center md:text-start">
                <p className="text-white font-semibold pt-8 text-2xl">200+</p>
                <p className="text-[#999]">Happy Customers</p>
              </div>
              <div className="xs:w-full sm:w-[49%] md:w-[300px] p-2 h-[130px] homeNumber text-center md:text-start">
                <p className="text-white font-semibold text-2xl pt-8">10K +</p>
                <p className="text-[#999]">Properties For Clients</p>
              </div>
              <div className="w-full lg:w-[300px] p-2 h-[130px] mb-4 md:mb-0 homeNumber text-center lg:text-start">
                <p className="text-white font-semibold text-2xl pt-8">16+</p>
                <p className="text-[#999]">Years of Experience</p>
              </div>
            </div>
    </div>
  )
}

export default Card