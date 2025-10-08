import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'

const RootLayouts = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow bg-[#F5F5F5] py-10">
        {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      </div>

      <Footer />
    </div>
  );
}

export default RootLayouts
