import React from "react";
import PropTypes from "prop-types"
import { v4 } from 'uuid';

function NewTeaForm(props) {

   

  return (
    <div>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <button type='submit'>Add new crate of tea</button>
      </form>
    </div>
  );
}

NewTeaForm.propTypes = {
};

export default NewTeaForm;