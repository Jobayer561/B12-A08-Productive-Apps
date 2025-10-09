/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../Components/Banner'
import useApps from '../Hooks/UseApps';
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import LoadingSpinner from '../Components/LoadingSpinner';
import Loading from '../Components/Loading';
const Home = ({apps,loading}) => {
  const showApps = apps.slice(0,8)

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

      <div className="max-w-[1440px] mx-auto">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
            {showApps.map((app) => (
              <Link key={app.id} to={`/app/${app.id}`}>
                {" "}
                <AppsCard key={app.id} app={app} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-purple-700 to-purple-400 text-white flex justify-center"
        >
          Show All
        </Link>
      </div>
    </>
  );
}

export default Home