import React from 'react';

import StarScore from '../widgets/star-score';
import RecipeMeta from '../widgets/recipe-meta';

import './RecipeItem.css';

const truncate = (text, wordNum) => {
  let textArr = text.split(' ', wordNum);
  textArr.push('...');
  return textArr.join(' ');
}

const RecipeItem = ({recipe}) => {
  const {id, title, image, category, score, description, owner, likes, cooktime} = recipe;
  const truncDescription = truncate(description, 20);
  return (
    <div className="col-md-6 col-sm-6 col-12">
      <div className="product-box-layout1 recipe-item">
        <figure className="item-figure">
          <a href="single-recipe1.html">
            <img src={image} alt="Product"/>
          </a>
        </figure>
        <div className="item-content">
          <span className="sub-title">{category}</span>
          <h3 className="item-title"><a href="single-recipe1.html">{title}</a></h3>
          <StarScore score={score}/>
          <p>{truncDescription}</p>
          <RecipeMeta cooktime={cooktime} owner={owner} likes={likes}/>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem
