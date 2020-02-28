import React, { Component } from 'react'

export class NutritionItem extends Component {
  render() {

    const {name, value} = this.props.info;

    return (
      <li>
        <div className="nutrition-name">{name}</div>
        <div className="nutrition-value">{value}</div>
      </li>
    )
  }
}

export default NutritionItem
