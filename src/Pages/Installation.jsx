import React, { useState } from "react";
import { loadInstall, Uninstall } from "../Utils/ConnectDB";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Installation = () => {
  const [install, setInstall] = useState(() => loadInstall());
  const [sortOrder, setSortOrder] = useState("none");

  if (!install.length)
    return (
      <p className="text-center text-4xl font-semibold my-16">
        No Data available...
      </p>
    );
  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...install].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...install].sort((a, b) => b.downloads - a.downloads);
    } else {
      return install;
    }
  })();
  const handleUninstall = (id) => {
    Uninstall(id);
    setInstall((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="space-y-6 ">
        <div className="flex flex-col sm:flex-row justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold mb-3 sm:mb-0">
            Install List{" "}
            <span className="text-sm text-gray-500">
              ({sortedItem.length}) Apps found
            </span>
          </h1>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Downloads</option>
              <option value="download-asc">Low-High</option>
              <option value="download-desc">High-Low</option>
            </select>
          </label>
        </div>
        <div className="space-y-3">
          {sortedItem.map((p) => (
            <div
              key={p.id}
              className="card card-side bg-base-100 shadow flex flex-col sm:flex-row items-center"
            >
              <figure>
                <img
                  className="w-70 sm:w-40 h-60 sm:h-28 object-cover p-3 rounded-md mt-4 sm:mt-0"
                  src={p.image}
                  alt={p.title}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title ml-16 sm:ml-0 font-bold text-2xl">
                  {p.title}
                </h3>
                <div className="flex gap-8 items-center text-xl font-semibold">
                  <div className="flex gap-1 items-center text-[#00D390]">
                    <FiDownload />
                    {p.downloads}M
                  </div>
                  <div className="flex gap-1 items-center text-[#FF8811]">
                    <FaStar />
                    {p.ratingAvg}
                  </div>
                  <p className="text-base-content/70">{p.size}MB</p>
                </div>
              </div>
              <div className="pr-4 items-center gap-3">
                <button
                  onClick={() => {
                    handleUninstall(p.id);
                    toast.success(`${p.title} Uninstalled successfully!`);
                  }}
                  className="btn transform hover:scale-105 bg-[#00D390] text-white mb-4 sm:mb-0"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
