import React from "react";
import inventoryList from "./inventoryList";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";

class TeaController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: [] ,
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState({formVisible: true})
  }

  formSubmissionHandler = (newTea) => {
    console.log("tea" + newTea)
    let newInventory = this.state.inventory.concat(newTea);
    console.log("inventory " + newInventory)
    this.setState({inventory: newInventory, formVisible: false})
  }


  render() {
    let currentView = null;

    if(this.state.formVisible) {
      currentView = <NewTeaForm formSubmissionHandler = {this.formSubmissionHandler}/>
    } else {
      currentView = <TeaList inventory={this.state.inventory} />
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