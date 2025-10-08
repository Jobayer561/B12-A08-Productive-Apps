import React from 'react'
import Banner from '../Components/Banner'


const Home = () => {


  return (
    <>
      <div className="">
        <Banner></Banner>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">
            Trending Apps
          </h1>
          <p className="text-gray-500 mb-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
 
    </>
  );
}

export default Home