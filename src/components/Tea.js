import React from "react";
import PropTypes from "prop-types";


function Tea({name, origin, price, roast}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Origin: {origin}</p>
      <p>Roast: {roast}</p>
      <p>Price: {price}</p>
    </div>
  )
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string
};

export default Tea;
