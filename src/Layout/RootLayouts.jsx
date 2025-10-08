import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const RootLayouts = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />

      <div className=" bg-[#F5F5F5] py-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default RootLayouts