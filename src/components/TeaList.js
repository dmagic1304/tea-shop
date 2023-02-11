import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";
import { v4 } from 'uuid'; 


function TeaList ({inventory, handleDetails, handleClick}) {
  return(
    <React.Fragment>
      <button class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleClick}>Add new tea</button>
      <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        {inventory.map((tea) => {
          return (
            <div key={v4()} onClick={() => handleDetails(tea.id)}>
              <Tea 
                name = {tea.name}
                origin = {tea.origin}
                flavor = {tea.flavor}
                price = {tea.price}
                poundsRemaining = {tea.poundsRemaining}
                poundsSold = {tea.poundsSold} 
                key = {tea.key} />
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

TeaList.propTypes = {
  inventory: PropTypes.array,
  handleDetails: PropTypes.func,
  handleClick: PropTypes.func
};

export default TeaList;