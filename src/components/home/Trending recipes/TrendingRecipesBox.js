import React, { Component } from 'react'
import TopRecipe from './TopRecipe'

export class TrendingRecipesBox extends Component {
  render() {
    return (
      <section class="padding-bottom-45">
        <div class="container">
          <div class="row gutters-60">
            <div class="col-lg-8">
              <div class="section-heading heading-dark">
                <h2 class="item-heading">TRENDING RECIPES</h2>
              </div>
              <div class="row">
                <TopRecipe/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TrendingRecipesBox
