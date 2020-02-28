import React, { Component } from 'react'
import IngredientItem from './IngredientItem'

export class Ingredients extends Component {
  render() {

    const ingredients = this.props.ingredients.map( (item, i) => <IngredientItem key={i} name={item}/> );

    return (
      <div className="col-xl-6 col-12">
        <div className="ingridients-wrap">
          <h3 className="item-title"><i className="fas fa-list-ul"></i>Ingridients</h3>
          {ingredients}
        </div>
      </div>
    )
  }
}

export default Ingredients
