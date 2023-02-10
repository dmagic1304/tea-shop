import React from "react";
import inventoryList from "./inventoryList";

class TeaController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: inventoryList
    };
  }


  render() {
    return(
      <p>main</p>
    )
  }

}

export default TeaController;