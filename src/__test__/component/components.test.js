import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import sinon from 'sinon';

import CategoryForm from '../../component/category-form';
import ExpenseForm from '../../component/expense-form';

describe('<CategoryForm/>', () => {
  test('add a new category', () => {
    const wrapper = shallow(<CategoryForm />);

    let name = "groceries";
    let budget = "100";
    
    let noteCreate = (state) => {
        expect(Category.state().name).toEqual(name);
        expect(Category.state().budget).toEqual(budget);
    }
    
    let Category = shallow(<CategoryForm handler={noteCreate} />);
    
    Category.find(".type-input").simulate( 'change', { target: {name:"name", value:name} } );
    Category.find(".amount-input").simulate( 'change', { target: {name:"budget", value:budget} } );
    Category.find("button").simulate( 'submit', { preventDefault:()=>{} } );
  });

});

describe('<ExpenseForm/>', () => {
  test('add a new expense', () => {
    const wrapper = shallow(<ExpenseForm />);

    let name = "PCC";
    let cost = "50";
    
    let noteCreate = (state) => {
        expect(Expense.state().name).toEqual(name);
        expect(Expense.state().cost).toEqual(cost);
    }
    
    let Expense = shallow(<ExpenseForm handler={noteCreate} />);
    
    Expense.find("#expense-name").simulate('change', { target: {name:"name", value:name}});
    Expense.find("#expense-amt").simulate('change', { target: {name:"cost", value:cost}});
    Expense.find("button").simulate('submit', {preventDefault:()=>{}});
  });
});
