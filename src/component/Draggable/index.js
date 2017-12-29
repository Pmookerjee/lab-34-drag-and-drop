import React from 'react';

class Draggable extends React.Component{

  constructor(props) {
    super(props)

    this.handleOnDragStart = this.handleOnDragStart.bind(this);
  }

  handleOnDragStart(e){
    let expense = JSON.stringify(this.props.expense);
    e.dataTransfer.setData("application/json", expense);
    console.log('ON DRAG START: ', expense)    
  }

  render(){

    return(
      <div draggable="true"
           onDragStart={this.handleOnDragStart}>
           {this.props.children}
      </div>
    )
  }

}

export default Draggable;