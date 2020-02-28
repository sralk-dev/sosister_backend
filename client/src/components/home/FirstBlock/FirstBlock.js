import React, { Component } from 'react'
import TrendingRecipesBox from './Trending recipes/TrendingRecipesBox'
import SideBarBox from './sidebar/SideBarBox'

export class FirstBlock extends Component {
  render() {
    return (
      <section className="padding-bottom-45">
        <div className="container">
          <div className="row gutters-60">
            <TrendingRecipesBox/>
            <SideBarBox/>
          </div>
        </div>
      </section>
    )
  }
}

export default FirstBlock
