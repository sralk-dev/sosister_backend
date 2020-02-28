import React, { Component } from 'react'
import RecipesBox from './main/RecipesBox'
import SideBarBox from '../home/FirstBlock/sidebar/SideBarBox';

export class Recipes extends Component {
  render() {
    return (
      <section className="all-recipes-page-wrap padding-top-80 padding-bottom-22">
        <div className="container">
          <div className="row gutters-60">
            <RecipesBox/>
            <SideBarBox/>
          </div>
        </div>
      </section>
    )
  }
}

export default Recipes
