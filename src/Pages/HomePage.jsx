import React from 'react'
import useApps from '../Hooks/UseApps'
import Loading from '../Components/Loading';
import Home from './Home';

const HomePage = () => {
    const {apps,loading} = useApps();
  return (
    
    <div className="mb-8">
      <div className=" px-4 max-w-[1440px] mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-center">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
       {
        loading ? <Loading/> : <Home key={apps.id} apps={apps} loading={loading}/>
       }
      </div>
  )
}

export default HomePage