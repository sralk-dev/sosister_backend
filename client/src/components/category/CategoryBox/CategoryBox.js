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

    const categories = dummyData.map( (recipe, i) => <CategoryItem key={i} info={recipe}/>);

    return (
      <section className="category-page-wrap padding-top-80 padding-bottom-50">
        <div className="container">
          <div className="row">
            {categories}
          </div>
        </div>
      </section>
    )
  }
}

export default CategoryBox
