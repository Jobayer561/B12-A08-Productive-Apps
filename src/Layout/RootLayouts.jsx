import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RootLayouts = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="px-6"/>

      <div className="flex-grow bg-[#F5F5F5] py-10">
        {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      </div>

      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default RootLayouts
