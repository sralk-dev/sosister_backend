import React, { Component } from 'react'
import SearchBox from './SearchBox'
import Logo from './Logo'
import SocialNet from './SocialNet'

export class SubHeader extends Component {
  render() {
    return (
      <div className="header-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <SocialNet/>
                <Logo/>
                <SearchBox/>
            </div>
        </div>
    </div>
    )
  }
}

export default SubHeader
