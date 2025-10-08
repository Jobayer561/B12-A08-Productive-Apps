import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/UseApps";
import { BsDownload } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import review from "../assets/icon-review.png";
const AppsDetails = () => {
  const [isSelected, setIsSelected] = useState(false);

  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((p) => String(p.id) === id);
  if (loading)
    return (
      <div className="text-4xl font-bold text-center mt-8">loading...</div>
    );
  const { title, image, companyName, downloads, ratingAvg, reviews, size } =
    app || {};
  console.log(title, image);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex gap-10">
        <div>
          <img className="w-80 h-80 rounded-md shadow-md" src={image} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <h1 className="text-2xl font-semibold mt-3">
            Developed By: <span className="text-[#9F62F2]">{companyName}</span>
          </h1>
          <hr className="w-full border-1 border-gray-300 mt-5" />
          <div className="flex gap-15 mt-4">
            <div className="flex flex-col gap-2 ">
              <BsDownload className="text-green-400 text-4xl" />
              <h1 className="font-semibold text-xl">Downloads</h1>
              <h1 className="font-bold text-4xl">{downloads}M</h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <FaStar className="text-[#FF8811] text-4xl" />
              <h1 className="font-semibold text-xl">Average Ratings</h1>
              <h1 className="font-bold text-4xl">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <img className="w-[38px]" src={review} alt="" />
              <h1 className="font-semibold text-xl">Total Reviews</h1>
              <h1 className="font-bold text-4xl">{reviews}k</h1>
            </div>
          </div>
          <button
            disabled={isSelected}
            onClick={() => setIsSelected(true)}
            className="mt-8 px-6 py-3 rounded-md font-semibold text-white bg-[#00D390] hover:scale-103 transition ease disabled:bg-[#00D390] 
            disabled:text-white disabled:opacity-100"
          >
            {isSelected ? "Install" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
