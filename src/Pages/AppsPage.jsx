import React from 'react'
import useApps from '../Hooks/UseApps';
import Loading from '../Components/Loading';
import Apps from './Apps';

const AppsPage = () => {
    const {apps,loading} = useApps();
  return (
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="mt-4 text-gray-500 px-4 lg:px-0">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {
        loading ? <Loading/> : <Apps key={apps.id}  apps={apps} loading={loading}/>
      }
    </div>
  );
}

export default AppsPage