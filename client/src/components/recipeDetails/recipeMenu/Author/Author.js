import React, { Component } from 'react'

export class Author extends Component {
  render() {

    const {name, img, about} = this.props.info;

    return (
      <div className="recipe-author">
        <div className="media media-none--xs">
          <img src={img} alt="Blog Author" className="rounded-circle media-img-auto"/>
          <div className="media-body">
            <h4 className="author-title">{name}</h4>
            <h5 className="author-sub-title">Written by</h5>
            <p>{about}</p>
            <ul className="author-social">
              <li>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                  <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </li>
              <li>
                  <a href="#"><i className="fab fa-skype"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Author
