import React from "react";

function Loader() {
  return (
    <div
      className="w-full h-screen grid place-items-center"
      data-test-id="loader"
    >
      <span className="inline-block animate-pulse px-4 p-2 bg-black text-white text-sm font-bold">
        loading
        <svg
          className="w-6 h-6 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
}

export default Loader;
