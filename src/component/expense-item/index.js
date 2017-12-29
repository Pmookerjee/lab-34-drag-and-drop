import './expense-item.scss';
import React from 'react';
import Draggable from '../Draggable';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    let {expense} = this.props;

    return(
      <Draggable divClass='expense-item' expense={expense}>
      {/* <div className='expense-item'> */}
        {this.props.expenses[this.props.categoryID].map((expense,i) => 
          <div key={expense.id}>
            <p> {(expense.name)} </p>
            <button onClick={() => this.props.expenseDelete(expense)}> x </button>
          </div>
        )}
      </Draggable>
    );
  }
};

export default ExpenseItem;
