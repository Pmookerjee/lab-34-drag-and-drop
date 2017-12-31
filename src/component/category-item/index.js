import './category-item.scss';
import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      categoryID: this.props.category.id
    }
  }

  render(){
    console.log('hitting category-item component')
    return(
      <div className='category-item'>        
        <h2> {this.props.category.name} </h2>
        <button 
          onClick={() => this.props.categoryRemove(this.props.category)}
          className='delete-button'
        > x </button>
      <CategoryForm category={this.props.category} onComplete={this.props.categoryUpdate}/>
      </div>
    );
  }
}

export default CategoryItem;