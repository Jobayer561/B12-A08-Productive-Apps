import React from "react";
import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen text-4xl font-bold">
      <h1>
        L
        <img
          src={logo}
          alt="logo"
          className="inline-block w-10 h-10 animate-spin mx-2"
        />
        ading...
      </h1>
    </div>
  );
};

export default Loading;
