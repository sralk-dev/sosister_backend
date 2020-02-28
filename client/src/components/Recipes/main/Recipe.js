import React, { Component } from 'react';
import RatingStars from '../../widgets/Recipes/RatingStars';
import MetaRecipe from '../../widgets/Recipes/MetaRecipe';

export class Recipe extends Component {
  render() {

    const {title, category, img, description, score, owner, likes, mins} = this.props.info;

    return (
        <div className="col-md-6 col-12">
          <div className="product-box-layout1">
            <figure className="item-figure">
              <a href="single-recipe1.html">
                <img src={img} alt="Product"/>
              </a>
            </figure>
            <div className="item-content">
              <span className="sub-title">{category}</span>
              <h3 className="item-title">
                <a href="single-recipe1.html">{title}</a>
              </h3>
              <RatingStars score={score}/>
              <p>{description}</p>
              <MetaRecipe owner={owner} mins={mins} likes={likes}/>
            </div>
          </div>
        </div>
    )
  }
}

export default Recipe
