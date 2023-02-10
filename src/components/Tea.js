import React from "react";
import PropTypes from "prop-types";


function Tea({name, origin, price, roast, poundsRemaining, poundsSold}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Origin: {origin}</p>
      <p>Roast: {roast}</p>
      <p>Price: {price}</p>
      <p>Pounds sold: {poundsSold} lb</p>
      <p>Pounds Remaining in crate: {poundsRemaining} lb</p>
    </div>
  )
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  poundsRemaining: PropTypes.number,
  poundsSold: PropTypes.number,
};

export default Tea;