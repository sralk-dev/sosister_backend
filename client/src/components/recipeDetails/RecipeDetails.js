import React, { Component } from 'react'
import Carousel from './carousel/Carousel'
import RecipeMenu from './recipeMenu/RecipeMenu'

let dummyData = {
  "title": "Krasnaya Ribka",
  "category": "Ribka",
  "owner": {
    "name": "Petr Alabrv",
    "img": "img/blog/author9.jpg",
    "about": "I love cooking and blogging. Using a fork, break salmon. Halve reserved potatoes and eggs crosswise."
  },
  "date": "Nov 14, 2018",
  "score": 2,
  "qtyLikes": 213,
  "prepTime": 100,
  "cookTime": 23,
  "serving": 2,
  "views": 1241,
  "images": [
    "img/figure/single-banner1.jpg",
    "img/figure/single-banner2.jpg",
    "img/figure/single-banner3.jpg",
    "img/figure/single-banner4.jpg",
    "img/figure/single-banner5.jpg",
  ],
  "ingredients": [
    "riba",
    "i",
    "vse",
    "bolshe",
    "nichego"
  ],
  "nutritions": [
    {
      "name": "Calories",
      "value": 242
    },
    {
      "name": "Protein",
      "value": 22
    },
    {
      "name": "Fat",
      "value": 2
    },
    {
      "name": "Carbs",
      "value": 42
    },
    {
      "name": "Sugar",
      "value": 1
    },
  ],
  "cookSteps": [
    {
      'number': 1,
      'mins': 10,
      'description': 'More off this less hello salamander lied porpoise much over tightly circa horse taped so ously side crudey mightily rigorous plot lifew homes in particular are subject.'
    },
    {
      'number': 2,
      'mins': 110,
      'description': 'I love cooking and blogging. Using a fork, break salmon. Halve reserved potatoes and eggs crosswise. The of something of did require met of help have someone.'
    },
    {
      'number': 3,
      'mins': 12,
      'description': 'More off this less hello salamander lied porpoise much over tightly circa horse taped so ously side crudey mightily rigorous plot lifew homes in particular are subject.'
    },
    {
      'number': 4,
      'mins': 34,
      'description': 'I love cooking and blogging. Using a fork, break salmon. Halve reserved potatoes and eggs crosswise. The of something of did require met of help have someone.'
    }
  ]
}

export class RecipeDetails extends Component {
  render() {
    return (
      <div>
        <Carousel images={dummyData.images}/>
        <RecipeMenu info={dummyData}/>
      </div>
    )
  }
}

export default RecipeDetails
