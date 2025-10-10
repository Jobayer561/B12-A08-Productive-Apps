/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import LoadingSpinner from '../Components/LoadingSpinner';
const Home = ({apps,loading}) => {
  const showApps = apps.slice(0,8)

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {showApps.map((app) => (
              <Link key={app.id} to={`/app/${app.id}`}>
                <AppsCard key={app.id} app={app} />
              </Link>
            ))}
          </div>
        )}
      </div>
   
    </>
  );
}

export default Home