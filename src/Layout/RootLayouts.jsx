import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const RootLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className='flex-grow'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default RootLayouts