import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList ({inventory, handleDetails}) {
  return(
    <div>
      {inventory.map((tea) => {
        return (
          <div onClick={() => handleDetails(tea.id)}>
            <Tea 
              name = {tea.name}
              origin = {tea.origin}
              roast = {tea.roast}
              price = {tea.price}
              poundsRemaining = {tea.poundsRemaining}
              poundsSold = {tea.poundsSold} 
              key = {tea.id} />
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