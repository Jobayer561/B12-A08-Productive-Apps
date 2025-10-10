import React from 'react'
import useApps from '../Hooks/UseApps'
import Loading from '../Components/Loading';
import Home from './Home';
import Banner from '../Components/Banner'
import { Link } from 'react-router';
const HomePage = () => {
    const {apps,loading} = useApps();
  return (
    <div className="mb-8">
      <div className="  max-w-[1440px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-center">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden md:block" /> Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>
      </div>
      <Banner></Banner>
      <div className="px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">
            Trending Apps
          </h1>
          <p className="text-gray-500 mb-3 px-4 md:px-0">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <Home key={apps.id} apps={apps} loading={loading} />
      )}
      <div className="flex justify-center mt-5">
        <Link
          to="/apps"
          className="btn transform hover:scale-105 bg-gradient-to-r from-purple-700 to-purple-400 text-white flex justify-center"
        >
          Show All
        </Link>
      </div>
    </div>
  );
}

export default HomePage