import React, { Component } from 'react'

export class SideBarRecipe extends Component {
  render() {

    const {number, title, owner, img, category} = this.props.info;

    return (
      <li class="single-item">
        <div class="item-img">
          <a href="#"><img src={img} alt="Post"/></a>
          <div class="count-number">{number}</div>
        </div>
        <div class="item-content">
          <div class="item-ctg">{category}</div>
          <h4 class="item-title">
            <a href="#">{title}</a>
          </h4>
          <div class="item-post-by">
            <a href="single-blog.html"><i class="fas fa-user"></i><span>by</span> {owner}</a>
          </div>
        </div>
      </li>
    )
  }
}

export default SideBarRecipe
