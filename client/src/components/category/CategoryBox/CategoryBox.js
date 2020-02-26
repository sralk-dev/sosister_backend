import React, { Component } from 'react'
import CategoryItem from './CategoryItem'

let dummyData = [
  {
    'title': 'Chicken',
    'img': 'img/product/product29.jpg',
    'qtyRecipes': 56
  },
  {
    'title': 'Bricken',
    'img': 'img/product/product29.jpg',
    'qtyRecipes': 577
  },
  {
    'title': 'Palchik',
    'img': 'img/product/product29.jpg',
    'qtyRecipes': 6
  },
  {
    'title': 'Vikin',
    'img': 'img/product/product29.jpg',
    'qtyRecipes': 13
  }
]

export class CategoryBox extends Component {
  render() {

    const categories = dummyData.map( recipe => <CategoryItem info={recipe}/>);

    return (
      <section class="category-page-wrap padding-top-80 padding-bottom-50">
        <div class="container">
          <div class="row">
            {categories}
          </div>
        </div>
      </section>
    )
  }
}

export default CategoryBox
