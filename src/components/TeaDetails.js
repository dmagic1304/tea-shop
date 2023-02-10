import React from "react";
import PropTypes from "prop-types";

function TeaDetails({tea}){

  return (
    <div>
      <h1>{tea.name}</h1>      
    </div>
  );
}

TeaDetails.propTypes = {
 
};

export default TeaDetails;