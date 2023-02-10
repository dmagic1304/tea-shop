import React from "react";
import inventoryList from "./inventoryList";
import NewTeaForm from "./NewTeaForm";
import TeaDetails from "./TeaDetails";
import TeaList from "./TeaList";

class TeaController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: inventoryList ,
      formVisible: false,
      details: null
    };
  }
  handleHomeClick = () => {
    this.setState({
      formVisible: false,
      details: null
    })
  }

  handleClick = () => {
    this.setState({formVisible: true})
  }

  formSubmissionHandler = (newTea) => {
    let newInventory = this.state.inventory.concat(newTea);
    this.setState({inventory: newInventory, formVisible: false})
  }

  handleDetails = (id) => {
    
    const selectedTea = this.state.inventory.filter(tea => tea.id === id)[0];
    this.setState({details: selectedTea})
  }

  handleSell = (selectedTea) => {
    let updatedTea = selectedTea;

    updatedTea.poundsRemaining -= 1;
    let updatedInventory = this.state.inventory;
    updatedInventory[this.state.inventory.indexOf(selectedTea)] = updatedTea;
    this.setState({inventory: updatedInventory})
  }



  render() {
    let currentView = null;

    if(this.state.details != null) {
      currentView = <TeaDetails tea = {this.state.details} home = {this.handleHomeClick} sell = {this.handleSell}/>
    }else if(this.state.formVisible) {
      currentView = <NewTeaForm formSubmissionHandler = {this.formSubmissionHandler} home = {this.handleHomeClick}/>
    } else {
      currentView = <TeaList inventory={this.state.inventory} handleDetails = {this.handleDetails} home = {this.handleHomeClick}/>
    }

    return(
      <div>
        <button onClick={this.handleClick}>Add new tea</button>
        {currentView}
      </div>
    )
  }

}

export default TeaController;