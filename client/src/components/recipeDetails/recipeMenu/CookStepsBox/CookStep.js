import React, { Component } from 'react'

export class CookStep extends Component {
  render() {

    const {number, mins, description} = this.props.info;

    return (
      <div class="direction-box-layout2">
        <div class="serial-number">
          <h4 class="number-title">{number}</h4><span>Step</span>
        </div>
        <div class="item-content">
          <span class="item-time"><i class="far fa-clock"></i>{mins} Mins</span>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default CookStep
