import React from 'react'
import playStore from '../assets/PlayStore.png'
import appStore from '../assets/AppStore.png'
import hero from '../assets/hero.png'
const Banner = () => {
  return (
    <div className="mb-8">
     
      <div className="flex justify-center gap-2 mt-5">
        <a
          href="https://play.google.com/store"
          target="_blank"
          className="btn font-semibold"
        >
          <div className="w-7 h-7">
            <img src={playStore} alt="" />
          </div>
          Google Play
        </a>
        <a
          href="https://www.apple.com/app-store"
          target="_blank"
          className="btn font-semibold"
        >
          <div className="w-7 h-7">
            <img src={appStore} alt="" />
          </div>
          App Store
        </a>
      </div>
      <div>
        <div className="mt-12 px-5 lg:px-0 flex justify-center">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-700 to-purple-400 py-12">
        <h1 className="text-center font-semibold text-white text-2xl md:text-4xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 text-center justify-center mt-8">
          <div className="text-white">
            <p className="text-gray-300 mb-3">Total Downloads</p>
            <h1 className="text-6xl font-bold mb-3">29.6M</h1>
            <p className="text-gray-300">21% more than last month</p>
          </div>
          <div className="text-white">
            <p className="text-gray-300 mb-3">Total Reviews</p>
            <h1 className="text-6xl font-bold mb-3">906K</h1>
            <p className="text-gray-300">46% more than last month</p>
          </div>
          <div className="text-white">
            <p className="text-gray-300 mb-3">Active Apps</p>
            <h1 className="text-6xl font-bold mb-3">132+</h1>
            <p className="text-gray-300">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner