import React, { Component } from 'react'

export class SearchBox extends Component {
  render() {
    return (
      <div class="col-lg-4">
        <div class="nav-action-elements-layout3">
            <ul>
                <li>
                    <div class="header-search-box">
                        <a href="#search" title="Search" class="search-button">
                            <i class="flaticon-search"></i>
                        </a> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
  }
}

export default SearchBox
