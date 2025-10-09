import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/UseApps";
import { BsDownload } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import review from "../assets/icon-review.png";
import Loading from "../Components/Loading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LoadingSpinner from "../Components/LoadingSpinner";
import { loadInstall, updateList } from "../Utils/ConnectDB";
const AppsDetails = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { id } = useParams();
  const { apps, loading } = useApps();
    useEffect(() => {
      const installedApps = loadInstall();
      const AlreadyInstalled = installedApps.some((p) => String(p.id) === id);
      if (AlreadyInstalled) {
        setIsSelected(true);
      }
    },[id]);
  if (loading) return <Loading />;
  const app = apps.find((p) => String(p.id) === id);
 
  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app || {};


  console.log(title, image);
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-0">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex justify-center md:justify-left">
          <img className="w-80 h-80 rounded-md shadow-md" src={image} alt="" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-semibold  ">{title}</h1>
          <h1 className="text-2xl font-semibold mt-3">
            Developed By: <span className="text-[#9F62F2]">{companyName}</span>
          </h1>
          <hr className=" w-full border-1 border-gray-300 mt-5 px-4 lg:px-0" />
          <div className="flex flex-col md:flex-row gap-5 md:gap-15 mt-4">
            <div className="flex flex-col gap-2 items-center md:items-left">
              <BsDownload className="text-green-400 text-4xl" />
              <h1 className="font-semibold text-xl">Downloads</h1>
              <h1 className="font-bold text-4xl">{downloads}M</h1>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-left">
              <FaStar className="text-[#FF8811] text-4xl text-center md:text-left" />
              <h1 className="font-semibold text-[14px] lg:text-xl ">
                Average Ratings
              </h1>
              <h1 className="font-bold text-4xl">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-left">
              <img className="w-[38px]" src={review} alt="" />
              <h1 className="font-semibold  text-[14px] lg:text-xl ">
                Total Reviews
              </h1>
              <h1 className="font-bold text-4xl">{reviews}k</h1>
            </div>
          </div>
          <button
            disabled={isSelected}
            onClick={() => {
              setIsSelected(true);
              updateList(app);
            }}
            className="mt-8 px-6 py-3 rounded-md font-semibold text-white bg-[#00D390] hover:scale-103 transition ease disabled:bg-[#00D390] 
            disabled:text-white disabled:opacity-100"
          >
            {isSelected ? "Install" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <div>
        <div className="space-y-3 mt-5 px-4 lg:px-0">
          <h3 className="text-xl font-semibold">Ratings</h3>
          <div className="bg-base-100 border rounded-xl pr-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratings.slice().reverse()} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#f58b2f" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="space-y-3 mt-4 px-4 lg:px-0">
        <h3 className="text-2xl font-semibold">Description</h3>
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default AppsDetails;
