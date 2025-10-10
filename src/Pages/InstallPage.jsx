import React from 'react'
import Installation from './Installation'
import useApps from '../Hooks/UseApps'
import Loading from '../Components/Loading'

const InstallPage = () => {
    const {loading} = useApps()
  return (
    <div className='max-w-[1440px] mx-auto px-6'>
      <div className="text-center">
        <h1 className=" text-3xl md:text-5xl font-bold ">Your Installed Apps</h1>
        <p className="mt-4 text-gray-500 px-4 lg:px-0">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {loading ? <Loading /> : <Installation />}
    </div>
  );
}

export default InstallPage