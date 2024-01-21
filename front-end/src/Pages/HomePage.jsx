import React from 'react'
import Home from '../Component/Home/Home'
import Property from '../Component/Property/Property'
import Testimonials from '../Component/Testimonials/Testimonials'
import Faq from '../Component/FAQ/Faq'

const HomePage = () => {
  return (
    <div>
       <Home/>
       <Property/>
       <Testimonials/>
       <Faq/>
    </div>
  )
}

export default HomePage