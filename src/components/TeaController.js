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

  handleClick = () => {
    this.setState({formVisible: true})
  }

  formSubmissionHandler = (newTea) => {
    let newInventory = this.state.inventory.concat(newTea);
    this.setState({inventory: newInventory, formVisible: false})
  }

  handleDetails = (id) => {
    
    const selectedTea = this.state.inventory.filter(tea => tea.id === id)[0];
    console.log (selectedTea)
    this.setState({details: selectedTea})
    console.log(this.state.details)
  }



  render() {
    let currentView = null;

    if(this.state.details != null) {
      currentView = <TeaDetails tea = {this.state.details} />
    }else if(this.state.formVisible) {
      currentView = <NewTeaForm formSubmissionHandler = {this.formSubmissionHandler}/>
    } else {
      currentView = <TeaList inventory={this.state.inventory} handleDetails = {this.handleDetails} />
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