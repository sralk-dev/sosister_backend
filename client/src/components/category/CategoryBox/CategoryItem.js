import React, { Component } from 'react'

export class CategoryItem extends Component {
  render() {

    const {title, img, qtyRecipes} = this.props.info;

    return (
      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="category-box-layout1">
          <figure class="item-figure">
            <a href="single-recipe1.html">
              <img src={img} alt="Product"/>
            </a>
          </figure>
          <div class="item-content">
            <h3 class="item-title"><a href="single-recipe1.html">{title}</a></h3>
            <span class="sub-title"> {qtyRecipes} Recipes</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryItem
