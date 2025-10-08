import React, { useState } from 'react'
import useApps from '../Hooks/UseApps'
import AppsCard from '../Components/AppsCard';
import LoadingSpinner from '../Components/LoadingSpinner';
import { IoIosSearch } from "react-icons/io";
import Loading from "../Components/Loading";

const Apps = () => {
      const {apps, loading} = useApps();
        const [search, setSearch] = useState("");
  const Input = search.trim().toLocaleLowerCase();
  const searchedApps = Input
    ? apps.filter((app) =>
        app.title.toLocaleLowerCase().includes(Input)
      )
    : apps;
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="mt-4 text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-8 flex justify-between px-6 lg:px-0">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          ({searchedApps.length}) Apps Found
        </h1>
        <label className="input flex items-center gap-2">
          <IoIosSearch className="text-xl text-gray-400" />
          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
        </label>
      </div>

      {loading ? (
        <LoadingSpinner count={12} />
      ): searchedApps.length === 0 ? (
  <div className="text-center text-gray-500 text-5xl mt-10">
    No data found.
  </div>
      )
       : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Apps