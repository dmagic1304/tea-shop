import React from "react";
import PropTypes from "prop-types";

function TeaDetails({tea, home, sell}){

  

  return (
    <React.Fragment>
      <button onClick={home} class="py-2.5 px-5 mr-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back to List</button>
      <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tea.name}</h1>
        <p class="font-normal text-gray-700 dark:text-gray-400">Origin: {tea.origin}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Flavor: {tea.flavor}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Price: {tea.price}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Pounds sold: {tea.poundsSold} lb</p>
        <p class="font-normal text-gray-700 dark:text-gray-400"> Pounds Remaining in crate: {tea.poundsRemaining}</p>
      </div>
      <button onClick={() => sell(tea)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sell</button>
    </React.Fragment>
  );
}

TeaDetails.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  poundsRemaining: PropTypes.number,
  poundsSold: PropTypes.number,
  home: PropTypes.func,
  sell: PropTypes.func
};



export default TeaDetails;