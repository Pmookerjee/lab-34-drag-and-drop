import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';

import {create, update, destroy} from '../action/category';
import {create as createExpense,
        update as updateExpense, 
        insert as insertExpense,
        destroy as destroyExpense} from '../action/expense';

describe('test Category actions', () => {

  test('category add returns correct type and payload', ()=> {

    let category = {name: 'FOODZ', budget: '300'};

    let action = create(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.name).toEqual('FOODZ');
    expect(action.payload.budget).toEqual('300');
    expect(action.payload.id).not.toBe(undefined);
  });

  test('category update returns correct type and payload', ()=> {
    
        let category = {name: 'BEER', budget: '500'};
    
        let action = update(category);

        expect(action.type).toEqual('CATEGORY_UPDATE');
        expect(action.payload.name).toEqual('BEER');
        expect(action.payload.budget).toEqual('500');
  });

  test('category destroy returns correct type and categoryId', ()=> {
    
        let category = {name: 'STUFFZ', id: uuid()};
    
        let action = destroy(category.id);

        expect(action.type).toEqual('CATEGORY_DESTROY');
        expect(action.payload).toEqual(category.id);
  });
})

describe('test Expense actions', () => {
  
  let catID = uuid();
  let myExpense = {name: 'MIGHTY Os', cost: '50', id: uuid(), categoryID: catID};

    test('expense add returns correct type and payload', ()=> {
  
  
      let action = createExpense(myExpense);
  
      expect(action.type).toEqual('EXPENSE_CREATE');
      expect(action.payload.name).toEqual('MIGHTY Os');
      expect(action.payload.cost).toEqual('50');
      expect(action.payload.id).not.toBe(undefined);

    });

    test('expense insert returns correct type and payload', ()=> {
      
      //simulate moving the expense to a new category
      let newCategoryID = uuid();
      myExpense.categoryID = newCategoryID;
      
          let action = insertExpense(myExpense);

          expect(action.type).toEqual('EXPENSE_INSERT');
          expect(action.payload.name).toEqual('MIGHTY Os');
          expect(action.payload.cost).toEqual('50');
          expect(action.payload.id).not.toBe(undefined);
          expect(action.payload.categoryID).toEqual(myExpense.categoryID);          
          expect(action.payload.categoryID).not.toEqual(catID);
    });
    
    test('expense update returns correct type and payload', ()=> {
      
          let expense = {name: 'IPAs', cost: '30'};
      
          let action = updateExpense(expense);
  
          expect(action.type).toEqual('EXPENSE_UPDATE');
          expect(action.payload.name).toEqual('IPAs');
          expect(action.payload.cost).toEqual('30');
    });
  
    test('expense =estroy returns correct type and expense =', ()=> {
      
          let expense = {name: 'STUFFZ', cost: '20'};
      
          let action = destroyExpense(expense);
  
          expect(action.type).toEqual('EXPENSE_DESTROY');
          expect(action.payload.name).toEqual('STUFFZ');
          expect(action.payload.cost).toEqual('20');
    });
  })