import React from "react";
import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="flex mt-15 justify-center h-screen text-4xl font-bold">
      <h1>
        L
        <img
          src={logo}
          alt="logo"
          className="inline-block w-10 h-10 animate-spin mx-2"
        />
        ading
        <span className="loading loading-dots loading-lg ml-2 mt-2"></span>
      </h1>
    </div>
  );
};

export default Loading;
