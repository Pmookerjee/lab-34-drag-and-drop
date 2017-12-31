import './expense-item.scss';
import React from 'react';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);

    this.handleMoveExpense=this.handleMoveExpense.bind(this);    
  }

  handleMoveExpense(expense){
    console.log('In the handleMoveExpense, this.props is ', this.props)
    this.props.expenseDelete(expense);
    expense.categoryID = this.props.categoryID;
    this.props.expenseInsert(expense);
  }

  render(){

    return(
      <Droppable parentClass='expense-item' onDrop={this.handleMoveExpense}>         
        {this.props.expenses[this.props.categoryID].map((expense,i) => 
          <Draggable expense={expense}>
            <div key={expense.id}>
              <p> {(expense.name)} </p>
              <button onClick={() => this.props.expenseDelete(expense)}> x </button>
            </div>
          </Draggable>
        )}
      </Droppable>
    );
  }
};

export default ExpenseItem;
