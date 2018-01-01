import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';

import categoryReducer from '../reducer/categories';
import expenseReducer from '../reducer/expenses';

describe('Reducer tests', () => { 

	describe('Category Reducer tests', () => {
		
		let category = {name: 'Fabulous', createDate: new Date(), id: uuid()};
		let state =[];		

		test('add a new category', () => {
			let action = {type: 'CATEGORY_CREATE', payload: category};
			state = categoryReducer(state, action);

			expect(state.length).toEqual(1);
			expect(state[0].name).toEqual('Fabulous');
				
		});

		test('update a category', () => {
			
			let newCategory = {name: 'New and improved!'};			

				state = categoryReducer(state, {
				type: 'CATEGORY_UPDATE',
				payload: {
					name: newCategory.name,
					createDate: new Date(),
					id: category.id,
				}
			});

			expect(state[0].name).toEqual('New and improved!');
			expect(state.length).toEqual(1);
		});

		test('destroy a category', () => {
		
			let cat1 = {name: 'Cat1', budget: '50', expenses: {}, id: uuid()};
		  let cat2 = {name: 'Cat2', budget: '100', expenses: {}, id: uuid()};
		
			state = [{...cat1}, {...cat2}];
			
			state = categoryReducer(state, {
				type: 'CATEGORY_DESTROY', 
				payload: cat1
			});
			
			expect(state.length).toEqual(1);
			expect(state[0].name).toEqual('Cat2');
		});
	})

	describe('Expense Reducer tests', () => {
				
		test('add a new expense', () => {

			let categoryID = uuid();
			
			let expenseObj = {
				name: 'PCC', 
				cost: '200', 
				id: uuid(),
				categoryID: categoryID
			};

			let state = {
				[categoryID]: expenseObj
			}
			
			  state = expenseReducer(state, {
				type: 'EXPENSE_CREATE', 
				payload: {
					name: 'PCC', 
					cost: '200', 
					id: uuid(),
					categoryID: categoryID
				}
			});
	
			expect(state[categoryID][0].name).toEqual('PCC');
			expect(state[categoryID][0].cost).toEqual('200');
				
		});
	})
})

