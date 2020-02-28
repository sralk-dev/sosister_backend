import React, { Component } from 'react'
import RatingStars from '../../../Widgets/Recipes/RatingStars'
import MetaRecipe from '../../../Widgets/Recipes/MetaRecipe'

export class Recipe extends Component {
  render() {

    const {info} = this.props;

    return (
      <div className={info.isTop ? "col-12" : "col-md-6 col-sm-6 col-12"}>
        <div className="product-box-layout1">
          <figure className="item-figure">
            <a href="single-recipe1.html">
              <img src={info.img} alt="Product"/>
            </a>
          </figure>
          <div className="item-content">
            <span className="sub-title">{info.category}</span>
            <h2 className="item-title">
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
