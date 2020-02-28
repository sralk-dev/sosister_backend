import React, { Component } from 'react'

export class Category extends Component {
  render() {

    const {category, qtyRecipes} = this.props.info;

    return (
      <li>
          <a href="#">{category}
            <span>{qtyRecipes}</span>
          </a>
      </li>
    )
  }
}

export default Category
