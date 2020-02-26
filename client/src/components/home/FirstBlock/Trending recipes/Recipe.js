import React, { Component } from 'react'
import RatingStars from '../../../Widgets/Recipes/RatingStars'
import MetaRecipe from '../../../Widgets/Recipes/MetaRecipe'

export class Recipe extends Component {
  render() {

    const {info} = this.props;

    return (
      <div class={info.isTop ? "col-12" : "col-md-6 col-sm-6 col-12"}>
        <div class="product-box-layout1">
          <figure class="item-figure">
            <a href="single-recipe1.html">
              <img src={info.img} alt="Product"/>
            </a>
          </figure>
          <div class="item-content">
            <span class="sub-title">{info.category}</span>
            <h2 class="item-title">
              <a href="single-recipe1.html">{info.title}</a>
            </h2>
            <RatingStars score={info.score}/>
            <p>{info.description}</p>
            <MetaRecipe owner={info.owner} mins={info.mins} likes={info.likes}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe
