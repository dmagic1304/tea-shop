import React from "react";

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

export default Tea;
