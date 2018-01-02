## usage 

### CLI

To run, use `npm run watch`

To test, install Dev dependencies and use `npm test`

## Component Tree

  
  App

    Provider

      BrowserRouter

        Route/Dashboard

          Category Form

          [Category Item]

            Category Form

            Expense Form

            [Expense Item]

            [Droppable]

            [Draggable]
            

### Dashboard  
  Connect to store - handles state
  Shows add category form, category item and expense item
  Calls all category and expense dispatches

### Category Form
  Form to add a new category
  When called from Category Item component, is a form to add cards

### Category Item
  Handles delete button of category
  maps through all the category items

### Expense Form
  Form to add a new expense
  Contains expense item

### Expense Item
  Handles delete button of expense
  Handles moving an expense to a different category
  is contained by Droppable component
  maps through all the expense items
  each iteration of the map is a draggable component

### Droppable
  Handles onDrop and onDragOver events of an expense item

### Draggable
  
  Handles onDragStart events of an expense item


