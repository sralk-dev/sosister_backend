import React, { Component } from 'react'
import SubscribeBox from './SubscribeBox'
import LatestRecipesBox from './LatestRecipesBox'

export class SideBarBox extends Component {
  render() {
    return (
      <div class="col-lg-4 sidebar-widget-area sidebar-break-md">
        <SubscribeBox/>
        <LatestRecipesBox/>
      </div>
    )
  }
}

export default SideBarBox
