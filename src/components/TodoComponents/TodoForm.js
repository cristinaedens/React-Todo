import React from "react";
import { render } from "react-dom";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      listItem: ""
    } //this closes this.state
  } //this closes constructor


handleChanges = event => {
  this.setState({
    listItem: event.target.value
  }) //this closes setstate
} //this closes handlechanges

handleSubmit = event => {
  event.preventDefault();
  this.props.addItem(this.state.listItem);
  this.setState({
    listItem: ""
  }) //this closes setState
} //this closes handleSubmit

render () {
  console.log("rendering form");
  
  return(
    <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      name="listItem"
      value={this.state.listItem}
      onChange={this.handleChanges}
      />
      <button type="submit">Add Item</button>
    </form>
  ) //this closes return
} //this closes render
} //this closes TodoForm
export default TodoForm;