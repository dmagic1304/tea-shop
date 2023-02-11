import React from "react";
import PropTypes from "prop-types";


function Tea({name, origin, flavor}) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{name}</h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">Origin: {origin}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">Flavor: {flavor}</p> 
    </div>
  )
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  flavor: PropTypes.string
};

export default Tea;
