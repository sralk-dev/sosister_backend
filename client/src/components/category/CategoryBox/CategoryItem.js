import React, { Component } from 'react'

export class CategoryItem extends Component {
  render() {

    const {title, img, qtyRecipes} = this.props.info;

    return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="category-box-layout1">
          <figure className="item-figure">
            <a href="single-recipe1.html">
              <img src={img} alt="Product"/>
            </a>
          </figure>
          <div className="item-content">
            <h3 className="item-title"><a href="single-recipe1.html">{title}</a></h3>
            <span className="sub-title"> {qtyRecipes} Recipes</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryItem
