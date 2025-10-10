import React from 'react'
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import { Link } from 'react-router';
const AppsCard = ({app}) => {
    const { title, downloads,image, ratingAvg,id } = app;
  return (
    <div >
      <div className="">
        <Link to={`/app/${id}`}>
          <div className="card bg-base-100 border-1 border-gray-200 shadow-md hover:scale-103 transition ease">
            <figure className="h-48 overflow-hidden p-5 mt-5 rounded-md">
              <img
                className="w-full object-cover rounded-md"
                src={image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>

              <div className="flex justify-between">
                <div className="flex items-center gap-1 text-[#00D390] px-2 py-2 w-1/4 bg-[#F1F5E8] justify-center font-semibold rounded-md">
                  {" "}
                  <FiDownload />
                  {downloads}M
                </div>
                <div className="flex items-center gap-1 text-[#FF8811] px-2 py-2 w-1/4 bg-[#FFF0E1] justify-center font-semibold rounded-md">
                  {" "}
                  <FaStar />
                  {ratingAvg}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AppsCard