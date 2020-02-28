import React, { Component } from 'react'
import CookStep from './CookStep'

export class CookStepsBox extends Component {
  render() {

    const cookSteps = this.props.cookSteps.map( item => <CookStep info={item}/> )

    return (
      <div className="direction-wrap-layout2">
        <div class="section-heading2 heading-dark">
          <h2 class="item-heading">Follow The Directions</h2>
        </div>
        {cookSteps}
      </div>
    )
  }
}

export default CookStepsBox
