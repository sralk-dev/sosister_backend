import React, { Component } from 'react'

export class Author extends Component {
  render() {

    const {name, img, about} = this.props.info;

    return (
      <div class="recipe-author">
        <div class="media media-none--xs">
          <img src={img} alt="Blog Author" class="rounded-circle media-img-auto"/>
          <div class="media-body">
            <h4 class="author-title">{name}</h4>
            <h5 class="author-sub-title">Written by</h5>
            <p>{about}</p>
            <ul class="author-social">
              <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </li>
              <li>
                  <a href="#"><i class="fab fa-skype"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Author
