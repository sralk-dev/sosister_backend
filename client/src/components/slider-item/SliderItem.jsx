import React from 'react';

import StarScore from '../widgets/star-score';
import RecipeMeta from '../widgets/recipe-meta';

import './SliderItem.css';

const truncate = (text, wordNum) => {
  let textArr = text.split(' ', wordNum);
  textArr.push('...');
  return textArr.join(' ');
}

const SliderItem = ({item}) => {
  const {id, title, image, category, score, description, owner, likes, cooktime} = item;
  const truncDescription = truncate(description, 20);
  return (
    <div className="ranna-slider-content-layout1">
      <figure className="item-figure">
        <a href="single-recipe1.html">
          <img src={image} alt="Product"/>
        </a>
      </figure>
      <div className="item-content">
        <span className="sub-title">{category}</span>
        <h2 className="item-title"><a href="single-recipe1.html">{title}</a></h2>
        <StarScore score={score}/>
        <p>{truncDescription}</p>
        <RecipeMeta cooktime={cooktime} owner={owner} likes={likes}/>
      </div>
    </div>
  )
}

export default SliderItem
