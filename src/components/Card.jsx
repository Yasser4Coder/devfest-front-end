import React from "react";
import { Link } from "react-router-dom";
{
  /* 
    Simple usage for component
    <Card
            imgSrc={photo}
            header="any header"
            text="any text"
          />
    */
}

export default function Card({ imgSrc, header, text }) {
  return (
    <div className="flex flex-col items-center max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="">
        <img className="rounded-t-lg" src={imgSrc} alt="undefined" />
      </Link>
      <div className="p-5">
        <Link to="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {header}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        <Link
          to=""
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#394496] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800"
        >
          Selected
        </Link>
      </div>
    </div>
  );
}
