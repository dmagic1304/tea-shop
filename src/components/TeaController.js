import React from "react";
import inventoryList from "./inventoryList";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";

class TeaController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: inventoryList,
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState({formVisible: true})
  }


  render() {
    let currentView = null;

    if(this.state.formVisible) {
      currentView = <NewTeaForm />
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