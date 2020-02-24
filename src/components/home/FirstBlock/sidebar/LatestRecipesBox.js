import React, { Component } from 'react'
import SideBarRecipe from './SideBarRecipe'

let dummyData = [
  {
    "title": "Sichuanskiy sous",
    "img": "img/product/latest1.jpg",
    "owner": "Rick Sanchez",
    "category": "Souce"
  },
  {
    "title": "Apelsin",
    "img": "img/product/latest1.jpg",
    "owner": "Marat Basharov",
    "category": "Eda"
  },
  {
    "title": "Re team",
    "img": "img/product/latest1.jpg",
    "owner": "Sheka Tsoi",
    "category": "Gavno"
  },
  {
    "title": "Eto sous",
    "img": "img/product/latest1.jpg",
    "owner": "Cap",
    "category": "Souce"
  },
  {
    "title": "Sichuanskiy sous",
    "img": "img/product/latest1.jpg",
    "owner": "Rick Sanchez",
    "category": "Souce"
  }
]

export class LatestRecipesBox extends Component {
  render() {

    const recipes = dummyData.map((recipe, i) => <SideBarRecipe info={{...recipe, number: i+1}}/>)

    return (
      <div class="widget">
        <div class="section-heading heading-dark">
          <h3 class="item-heading">LATEST RECIPES</h3>
        </div>
        <div class="widget-latest">
          <ul class="block-list">
            {recipes}
          </ul>
        </div>
      </div>
    )
  }
}

export default LatestRecipesBox
