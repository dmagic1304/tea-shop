import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";
import { v4 } from 'uuid'; 


function TeaList ({inventory, handleDetails}) {
  return(
    <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
      {inventory.map((tea) => {
        return (
          <div key={v4()} onClick={() => handleDetails(tea.id)}>
            <Tea 
              name = {tea.name}
              origin = {tea.origin}
              roast = {tea.roast}
              price = {tea.price}
              poundsRemaining = {tea.poundsRemaining}
              poundsSold = {tea.poundsSold} 
              key = {tea.key} />
          </div>
        )
      })}
    </div>
  )
}

TeaList.propTypes = {
  inventory: PropTypes.array,
  handleDetails: PropTypes.func
};

export default TeaList;