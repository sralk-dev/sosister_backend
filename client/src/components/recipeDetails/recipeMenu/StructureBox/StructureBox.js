import React, { Component } from 'react'
import Ingredients from './Ingredients/Ingredients'
import Nutritions from './Nutrition/Nutritions'

export class StructureBox extends Component {
  render() {
    return (
      <div className="making-elements-wrap">
        <div className="row">
          <Ingredients ingredients={this.props.info.ingredients}/>
          <Nutritions nutritions={this.props.info.nutritions}/>
        </div>
      </div>
    )
  }
}

export default StructureBox
