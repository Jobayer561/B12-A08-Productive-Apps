import React from "react";

const LoadingSpinner = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex  flex-col gap-4">
          <div className="skeleton h-48 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="flex justify-between gap-10">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
