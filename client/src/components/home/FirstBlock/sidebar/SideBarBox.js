import React, { Component } from 'react'
import SubscribeBox from './SubscribeBox'
import LatestRecipesBox from './LatestRecipesBox'
import ListCategories from './ListCategories'

export class SideBarBox extends Component {
  render() {
    return (
      <div class="col-lg-4 sidebar-widget-area sidebar-break-md">
        <SubscribeBox/>
        <LatestRecipesBox/>
        <ListCategories/>
      </div>
    )
  }
}

export default SideBarBox
