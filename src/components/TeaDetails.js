import React from "react";
import PropTypes from "prop-types";

function TeaDetails({tea}){

  return (
    <div>
      <h1>{tea.name}</h1>
      <p>Origin: {tea.origin}</p>
      <p>Roast: {tea.roast}</p>
      <p>Price: ${tea.price}</p>
      <p>Pounds sold: {tea.poundsSold} lb</p>
      <p>Pounds Remaining in crate: {tea.poundsRemaining} lb</p>      
    </div>
  );
}

TeaDetails.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  poundsRemaining: PropTypes.number,
  poundsSold: PropTypes.number,
};



export default TeaDetails;