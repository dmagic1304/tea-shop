import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList ({inventory}) {
  return(
    <div>
      {inventory.map((tea) => {
        return (
          <div>
            <Tea 
              name = {tea.name}
              origin = {tea.origin}
              roast = {tea.roast}
              price = {tea.price} />
          </div>
        )
      })}
    </div>
  )
}

TeaList.propTypes = {
  inventory: PropTypes.array
};

export default TeaList;