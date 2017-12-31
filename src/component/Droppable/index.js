import React from 'react';

class Droppable extends React.Component{

  constructor(props) {
    super(props)

    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleDrop(e) {
    e.preventDefault();
    let expenseData = e.dataTransfer.getData("application/json");
    let expense = JSON.parse(expenseData);
    this.props.onDrop(expense);
    console.log('DROP ', expense);
  }

  handleDragOver(e) {
    e.preventDefault();
    console.log('DRAGGING_OVER')
  }

  render(){

    return(

      <div className={this.props.parentClass}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}>
        {this.props.children}
      </div>
    )
  }

}

export default Droppable;