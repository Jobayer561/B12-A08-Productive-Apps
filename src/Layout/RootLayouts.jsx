import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const RootLayouts = () => {
  return (
    <div className=''>
        <Navbar/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default RootLayouts