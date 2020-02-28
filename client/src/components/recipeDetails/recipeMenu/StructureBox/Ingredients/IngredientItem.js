import React, { Component } from 'react'

export class IngredientItem extends Component {
  render() {
    return (
      <div className="checkbox checkbox-primary">
        <input id="checkbox1" type="checkbox"/>
        <label htmlFor="checkbox1">{this.props.name}</label>
      </div>
    )
  }
}

export default IngredientItem
