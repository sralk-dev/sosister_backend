import React from 'react';

import './RecipeIngredients.css';

const RecipeIngredients = ({ingredients = []}) => {

  const renderData = ingredients.map( (item, idx) => {
    return <div key={item.id} className="checkbox checkbox-primary">
              <input id={`checkbox${idx}`} type="checkbox"/>
              <label htmlFor={`checkbox${idx}`}>{item.name}</label>
            </div>
  })

  return (
    <div className="making-elements-wrap">
      <div className="row">
        <div className="col-xl-6 col-12">
          <div className="ingridients-wrap">
              <h3 className="item-title"><i className="fas fa-list-ul"></i>Ingridients</h3>
              {renderData}
            </div>
          </div>
        </div>
      </div> 
  )
}

export default RecipeIngredients
