import React from 'react'
import Home from '../Component/Home/Home'
import Advert from '../Component/Advert/Advert'
import Navigation from '../Component/Navigation/Navigation'
import { Footer } from '../Component/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Advert/>
        <Navigation/>
        <Footer/>
    </div>
  )
}

export default HomePage