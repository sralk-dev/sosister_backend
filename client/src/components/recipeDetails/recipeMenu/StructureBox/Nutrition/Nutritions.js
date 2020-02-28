import React, { Component } from 'react'
import NutritionItem from './NutritionItem'

export class Nutritions extends Component {
  render() {

    const nutritions = this.props.nutritions.map( (item, i) => <NutritionItem key={i} info={item}/> )

    return (
      <div className="col-xl-6 col-12">
        <div className="nutrition-wrap">
          <h3 className="item-title"><i className="fas fa-info"></i>Nutrition</h3>
          <ul className="nutrition-list">
            {nutritions}
          </ul>
        </div>
      </div>
    )
  }
}

export default Nutritions
