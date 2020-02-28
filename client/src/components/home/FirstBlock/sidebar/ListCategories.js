import React, { Component } from 'react'
import Category from './Category'

let dummyData = [
  {
    'category': 'Souce',
    'qtyRecipes': 22
  },
  {
    'category': 'Kruto',
    'qtyRecipes': 2
  },
  {
    'category': 'Wahyrrr',
    'qtyRecipes': 56
  },
  {
    'category': 'Dead Inside',
    'qtyRecipes': 142
  },
  {
    'category': 'Uff',
    'qtyRecipes': 3
  },
]

export class ListCategories extends Component {
  render() {

    const categories = dummyData.map( (category, i) => <Category key={i} info={category}/>);

    return (
      <div className="widget">
        <div className="section-heading heading-dark">
          <h3 className="item-heading">CATEGORIES</h3>
        </div>
        <div className="widget-categories">
          <ul>
            {categories}
          </ul>
        </div>
      </div>
    )
  }
}

export default ListCategories
