import React from "react";
import PropTypes from "prop-types"
import { v4 } from 'uuid';

function NewTeaForm(props) {

  function handleNewTeaSubmisssion(e) {
    e.preventDefault();
    props.formSubmissionHandler({
      name: e.target.name.value,
      origin: e.target.origin.value,
      flavor: e.target.flavor.value,
      price: e.target.price.value,
      poundsRemaining: 130,
      poundsSold: 0,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <button onClick={props.home} className="py-2.5 px-5 mr-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back to List</button>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <form onSubmit={handleNewTeaSubmisssion}>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
            type='text'
            name='name'
            placeholder='Name' />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
            type='text'
            name='origin'
            placeholder='Origin' />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
            type='text'
            name='flavor'
            placeholder='Flavor' />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
            type='number'
            name='price'
            placeholder='Price' />
          <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add new crate of tea</button>
        </form>
      </div>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  home: PropTypes.func
};

export default NewTeaForm;