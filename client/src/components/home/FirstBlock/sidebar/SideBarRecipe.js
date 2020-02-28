import React, { Component } from 'react'

export class SideBarRecipe extends Component {
  render() {

    const {number, title, owner, img, category} = this.props.info;

    return (
      <li className="single-item">
        <div className="item-img">
          <a href="#"><img src={img} alt="Post"/></a>
          <div className="count-number">{number}</div>
        </div>
        <div className="item-content">
          <div className="item-ctg">{category}</div>
          <h4 className="item-title">
            <a href="#">{title}</a>
          </h4>
          <div className="item-post-by">
            <a href="single-blog.html"><i className="fas fa-user"></i><span>by</span> {owner}</a>
          </div>
        </div>
      </li>
    )
  }
}

export default SideBarRecipe
