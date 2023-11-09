import React from "react";
import { Link } from "react-router-dom";

function Card({ destination }) {
  const { id, title, shortDescription, price, thumbnail } = destination || {};

  return (
    <div className="flex flex-col w-2/6 mx-auto lg:basis-1/3	 bg-white rounded-xl shadow-md overflow-hidden my-4">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={thumbnail} alt="image" />
      </div>
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{shortDescription}</p>
      </div>
      <Link to={`/destinationDetails/${id}`}>
        <div className="p-6 border-t border-gray-200 bg-gray-100 flex justify-between items-center">
          <button className="px-2 py-2 bg-[#44D7B6] text-white rounded hover:bg-blue-600 transition ease-in">
            Book Now
          </button>
          <p className="text-sm self-center justify-self-end ">{price}TK</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
