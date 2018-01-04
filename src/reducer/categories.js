const emptyState = [];

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(item => item.id === payload.id ? payload : item);
    case 'CATEGORY_DESTROY':
      return state.filter(item => item.id !== payload.id);
      
    case "EXPENSE_CREATE": 
      return state.map(category => {
        if(category.id === payload.categoryID) {
          category.budget -= payload.cost;
          return category;
        } 
        return category;
      })

    case "EXPENSE_INSERT": 
     return state.map(category => {
        if(category.id === payload.categoryID) {
          category.budget -= payload.cost;
          return category;
        } 
        return category;
     })

    case "EXPENSE_UPDATE":
      return state.map(category => {
        if(category.id === payload.categoryID) {
          category.budget -= payload.cost;
          return category;
        } 
        return category;
      }) 

    case "EXPENSE_DESTROY":
      return state.map(category => {
        if(category.id === payload.categoryID) {
          category.budget += payload.cost;
          return category;
        } 
        return category;
      })
    default:
      return state;
  }
}