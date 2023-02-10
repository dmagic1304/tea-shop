import React from "react";
import PropTypes from "prop-types";


function Tea({name, origin, roast}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Origin: {origin}</p>
      <p>Roast: {roast}</p> 
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
