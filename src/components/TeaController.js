import React from "react";
import inventoryList from "./inventoryList";
import NewTeaForm from "./NewTeaForm";
import TeaDetails from "./TeaDetails";
import TeaList from "./TeaList";
import UpdateTeaForm from "./UpdateTeaForm";

class TeaController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: inventoryList,
      formVisible: false,
      details: null,
      editing: false
    };
  }
  handleHomeClick = () => {
    this.setState({
      formVisible: false,
      details: null
    })
  }

  handleClick = () => {
    this.setState({ formVisible: true })
  }

  formSubmissionHandler = (newTea) => {
    let newInventory = this.state.inventory.concat(newTea);
    this.setState({ inventory: newInventory, formVisible: false })
  }

  handleDetails = (id) => {

    const selectedTea = this.state.inventory.filter(tea => tea.id === id)[0];
    this.setState({ details: selectedTea })
  }

  handleSell = (selectedTea) => {
    let updatedTea = selectedTea;
    if (updatedTea.poundsRemaining > 0) {
      updatedTea.poundsRemaining -= 1;
      updatedTea.poundsSold += 1;
    } else {
      updatedTea.poundsRemaining = "Out of stock"
    }
    let updatedInventory = this.state.inventory;
    updatedInventory[this.state.inventory.indexOf(selectedTea)] = updatedTea;
    this.setState({ inventory: updatedInventory })
  }

  handleUpdateForm = () => {
    this.setState({ editing: true })
  }

  handleUpdate = (selectedTea) => {
    let updatedTea = selectedTea;
    let updatedInventory = this.state.inventory;
    updatedInventory[this.state.inventory.indexOf(this.details)] = updatedTea;
    this.setState({ inventory: updatedInventory, editing: false })
  }



  render() {
    let currentView = null;

    if (this.state.editing) {
      currentView = <UpdateTeaForm update={this.handleUpdate} />
    } else if (this.state.details != null) {
      currentView = <TeaDetails tea={this.state.details} home={this.handleHomeClick} sell={this.handleSell} update={this.handleUpdateForm} />
    } else if (this.state.formVisible) {
      currentView = <NewTeaForm formSubmissionHandler={this.formSubmissionHandler} home={this.handleHomeClick} />
    } else {
      currentView = <TeaList handleClick={this.handleClick} inventory={this.state.inventory} handleDetails={this.handleDetails} home={this.handleHomeClick} />
    }

    return (
      <div className="justify-center">
        {currentView}
      </div>
    )
  }

}

export default TeaController;