import React, { Component } from 'react'
import MetaDetailRecipe from '../../../Widgets/Recipes/MetaDetailRecipe'
import Actions from '../../../Widgets/Recipes/Actions'

export class RecipeWidgets extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
        <MetaDetailRecipe info={this.props.info}/>
        <Actions/>
      </div>
    )
  }
}

export default RecipeWidgets
