import React, { Component } from 'react'
import CookStep from './CookStep'

export class CookStepsBox extends Component {
  render() {

    const cookSteps = this.props.cookSteps.map( (item, i) => <CookStep key={i} info={item}/> )

    return (
      <div className="direction-wrap-layout2">
        <div className="section-heading2 heading-dark">
          <h2 className="item-heading">Follow The Directions</h2>
        </div>
        {cookSteps}
      </div>
    )
  }
}

export default CookStepsBox
