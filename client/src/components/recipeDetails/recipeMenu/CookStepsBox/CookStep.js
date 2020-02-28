import React, { Component } from 'react'

export class CookStep extends Component {
  render() {

    const {number, mins, description} = this.props.info;

    return (
      <div className="direction-box-layout2">
        <div className="serial-number">
          <h4 className="number-title">{number}</h4><span>Step</span>
        </div>
        <div className="item-content">
          <span className="item-time"><i className="far fa-clock"></i>{mins} Mins</span>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default CookStep
