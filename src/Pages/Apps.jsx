import React, { useState } from "react";
import AppsCard from "../Components/AppsCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import { IoIosSearch } from "react-icons/io";
import Loading from "../Components/Loading";
const Apps = ({ apps, loading }) => {
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const Input = search.trim().toLocaleLowerCase();
  const searchedApps = Input
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(Input))
    : apps;
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between py-5 items-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-7 md:md-0">
          ({searchedApps.length}) Apps Found
        </h1>
        <label className="input flex items-center gap-2">
          <IoIosSearch className="text-xl text-gray-400" />
          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchLoading(true);
              setTimeout(() => {
                setSearchLoading(false);
              }, 200);
            }}
            className="flex-1"
          />
        </label>
      </div>

      {loading ? (
        <LoadingSpinner count={12} />
      ) : searchLoading ? (
        <Loading />
      ) : searchedApps.length === 0 ? (
        <div className="text-center text-gray-500 text-5xl my-10">
          No data found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
