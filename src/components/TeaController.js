import React from "react";
import inventoryList from "./inventoryList";
import TeaList from "./TeaList";

class TeaController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: inventoryList
    };
  }


  render() {
    return(
      <div>
        <TeaList inventory={this.state.inventory} />
      </div>
    )
  }

}

export default TeaController;