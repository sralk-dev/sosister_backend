import React, { Component } from 'react';
import Recipe from './Recipe';

let dummyData = [
  {
    "title": "Sosiski na paru",
    "category": "La pasta",
    "img": "img/product/product4.jpg",
    "description": "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crud mightily rigorous plot life. New homes n particular are subject.",
    "score": 3,
    "owner": 'Petr',
    "likes": 23,
    "mins": 2
  },
  {
    "title": "Value everybody",
    "category": "La la",
    "img": "img/product/product4.jpg",
    "description": "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crud mightily rigorous plot life. New homes n particular are subject.",
    "score": 5,
    "owner": 'Anna',
    "likes": 3,
    "mins": 233
  },
  {
    "title": "Purewka",
    "category": "La pure",
    "img": "img/product/product4.jpg",
    "description": "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crud mightily rigorous plot life. New homes n particular are subject.",
    "score": 1,
    "owner": 'Pawa',
    "likes": 1000,
    "mins": 15
  }
];

export class TrendingRecipesBox extends Component {
  render() {

    dummyData[0]['isTop'] = true;

    const listRecipes = dummyData.map(recipe => <Recipe info={{...recipe}}/>);

    return (
      <section class="padding-bottom-45">
        <div class="container">
          <div class="row gutters-60">
            <div class="col-lg-8">
              <div class="section-heading heading-dark">
                <h2 class="item-heading">TRENDING RECIPES</h2>
              </div>
              <div class="row">
                {listRecipes}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TrendingRecipesBox
