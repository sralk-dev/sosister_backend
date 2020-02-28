import React, { Component } from 'react'

export class SearchBox extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="nav-action-elements-layout3">
            <ul>
                <li>
                    <div className="header-search-box">
                        <a href="#search" title="Search" className="search-button">
                            <i className="flaticon-search"></i>
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
