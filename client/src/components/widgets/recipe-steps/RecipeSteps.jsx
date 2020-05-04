import React from 'react';

import './RecipeSteps.css';

const RecipeSteps = ({steps = []}) => {

	const renderData = steps.map( (item) => {
		return <div key={item.id} className="direction-box-layout2">
							<div className="serial-number">
								<h4 className="number-title">{item.order}</h4><span>Step</span>
							</div>
							<div className="item-content">
								<span className="item-time"><i className="far fa-clock"></i>{item.time} Mins</span>
								<p>{item.description}</p>
							</div>
						</div>
					
	})

  return (
    <div className="direction-wrap-layout2">
      <div className="section-heading2 heading-dark">
        <h2 className="item-heading">Follow The Directions</h2>
      </div>
      {renderData}
    </div>
  )
}

export default RecipeSteps
