import React, { Component } from 'react'
import SearchBox from './SearchBox'
import Logo from './Logo'
import SocialNet from './SocialNet'

export class SubHeader extends Component {
  render() {
    return (
      <div class="header-bottom d-none d-lg-block">
        <div class="container">
            <div class="row">
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
