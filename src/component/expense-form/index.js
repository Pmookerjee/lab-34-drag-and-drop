import ExpenseItem from '../expense-item';
import React from 'react';

let emptyState = {
  name: '',
  cost: 0,
}

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      cost: 0,
      categoryID: this.props.categoryID,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.props.onComplete({name:'Expense One', cost: 10, categoryID: this.props.categoryID});
    this.props.onComplete({name:'Expense Two', cost: 20, categoryID: this.props.categoryID});
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render(){

    return(
      <div className='category-form'>
        <form 
          className='expense-form'
          onSubmit={this.handleSubmit}
        >
          <input
            name='name'
            placeholder='expense item'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name='cost'
            type='number'
            value={this.state.cost}
            onChange={this.handleChange}
          />
          <button type='submit'> create expense </button>
        </form>

          <ExpenseItem 
            expenseDelete={this.props.expenseDelete}
            expenseInsert={this.props.expenseInsert}            
            expenses={this.props.expenses} 
            categoryID={this.state.categoryID}/> 
      </div>
    )
  }
}

export default ExpenseForm;