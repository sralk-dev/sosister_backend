import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo/RecipeInfo'
import StructureBox from './StructureBox/StructureBox'
import CookStepsBox from './CookStepsBox/CookStepsBox'

export class RecipeMenu extends Component {
  render() {
    return (
      <section class="single-recipe-wrap-layout2 padding-bottom-80">
        <div class="container">
          <div class="single-recipe-layout2">
            <RecipeInfo info={this.props.info}/>
            <StructureBox info={this.props.info}/>
            <CookStepsBox cookSteps={this.props.info.cookSteps}/>
          </div>
        </div>
      </section>
    )
  }
}

export default RecipeMenu
