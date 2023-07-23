// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../pages/Shared/Navbar/Navbar'
import Footer from '../pages/Shared/Footer/Footer'
import {Outlet} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-[calc(100vh-100px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main