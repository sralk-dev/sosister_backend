import React, { Component } from 'react';
import Recipe from './Recipe';

let dummyData = [
  {
    "title": "Sosiski na paru",
    "category": "La pasta",
    "img": "img/product/product50.jpg",
    "description": "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crud mightily rigorous plot life. New homes n particular are subject.",
    "score": 3,
    "owner": 'Petr',
    "likes": 23,
    "mins": 2
  },
  {
    "title": "Value everybody",
    "category": "La la",
    "img": "img/product/product50.jpg",
    "description": "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crud mightily rigorous plot life. New homes n particular are subject.",
    "score": 5,
    "owner": 'Anna',
    "likes": 3,
    "mins": 233
  },
  {
    "title": "Purewka",
    "category": "La pure",
    "img": "img/product/product50.jpg",
    "description": "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crud mightily rigorous plot life. New homes n particular are subject.",
    "score": 1,
    "owner": 'Pawa',
    "likes": 1000,
    "mins": 15
  }
];

export class RecipesBox extends Component {
  render() {

    const recipes = dummyData.map( (recipe, i) => <Recipe key={i} info={recipe}/> );

    return (
            <div className="col-lg-8">
              <div className="row">
                {recipes}
              </div>
            </div>
    )
  }
}

export default RecipesBox
