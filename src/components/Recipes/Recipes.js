import React, { Component } from 'react'
import RecipesBox from './main/RecipesBox'
import SideBarBox from '../home/FirstBlock/sidebar/SideBarBox';

export class Recipes extends Component {
  render() {
    return (
      <section class="all-recipes-page-wrap padding-top-80 padding-bottom-22">
        <div class="container">
          <div class="row gutters-60">
            <RecipesBox/>
            <SideBarBox/>
          </div>
        </div>
      </section>
    )
  }
}

export default Recipes
