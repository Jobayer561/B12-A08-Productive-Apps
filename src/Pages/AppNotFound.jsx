import React from "react";
import errorApp from "../assets/App-Error.png";

import { Link } from "react-router";
const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center py-12 px-4">
        <img className="h-[300px]" src={errorApp} alt="" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-3 mt-8">
          Oops, Apps not found!
        </h1>
        <p className="text-gray-500 mb-3">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-purple-700 to-purple-400 text-white"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default Error;
