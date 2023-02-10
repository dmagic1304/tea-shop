import React from "react";
import PropTypes from "prop-types"
import { v4 } from 'uuid';

function NewTeaForm(props) {

   function handleNewTeaSubmisssion(e) {
    e.preventDefault();
    props.formSubmissionHandler({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: e.target.price.value,
      poundsRemaining: 130,
      poundsSold: 0,
      key: v4()
    })
   }

  return (
    <div>
      <form onSubmit={handleNewTeaSubmisssion}>
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
      <button onClick={props.home}>Back to List</button>
    </div>
  );
}

NewTeaForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  home: PropTypes.func
};

export default NewTeaForm;