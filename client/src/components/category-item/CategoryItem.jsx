import React from 'react';

import './CategoryItem.css';

const CategoryItem = ({category}) => {

  const {title, recipeNums, image} = category;

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 category-item">
      <div className="category-box-layout1">
        <figure className="item-figure">
          <a href="single-recipe1.html">
            <img src={image} alt="Product"/>
          </a>
        </figure>
        <div className="item-content">
            <h3 className="item-title"><a href="single-recipe1.html">{title}</a></h3>
            <span className="sub-title"> {recipeNums} Recipes</span>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
