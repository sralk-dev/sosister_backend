import React, { Component } from 'react'
import RecipeWidgets from './RecipeWidgets'
import Features from './Features';

export class RecipeInfo extends Component {
  render() {

    const {title, category, owner, date, qtyLikes, score, prepTime, cookTime, serving, views} = this.props.info;
    
    return (
      <div>
        <div className="ctg-name">{category}</div>
        <h2 className="item-title">{title}</h2>
        <RecipeWidgets info={{owner, date, qtyLikes, score}}/>
        <Features info={{prepTime, cookTime, serving, views}}/>
        <p className="item-description">
          More off this less hello salamander lied porpoise much over tightly
          circa horse taped so innocuously side crudey mightily rigorous plot life. New homes in
          particular are subject.All recipes created with FoodiePress have suport for Micoformats and
          Google Recipe View. Schema.org is a collaboration byo improve the web by creatinegaera
          structured data markup.More off this less hello salamander lied porpoise much over tightly
          circa horse tapedey innocuously.
        </p>
      </div>
    )
  }
}

export default RecipeInfo
