import React, {Fragment, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import WithSosisterApi from '../../hoc/WithSosisterApi';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';
import {fetchLatestRecipes} from '../../../actions';

import './LatestRecipes.css';

const LatestRecipesItem = ({num, recipe:{id, title, image, category, owner}}) => {
  return (
    <Fragment>
      <div className="item-img">
        <a href="#"><img src={image} alt="Post"/></a>
        <div className="count-number">{num}</div>
      </div>
      <div className="item-content">
        <div className="item-ctg">{category}</div>
        <h4 className="item-title"><a href="#">{title}</a></h4>
        <div className="item-post-by"><a href="single-blog.html"><i className="fas fa-user"></i><span>by</span>
                {owner}</a></div>
      </div>
    </Fragment>
  )
}

const LatestRecipes = ({data}) => {
  const renderData = data.map( (item, idx) => <li key={item.id} className="single-item"><LatestRecipesItem num={idx} recipe={item}/></li> );

  return (
    <ul className="block-list">
      {renderData}
    </ul>
  );
}

const LatestRecipesContainer = ({recipes: {data, isLoading, error}, fetchLatestRecipes}) => {

  useEffect( () => {
    fetchLatestRecipes();
  }, [])

  let renderData = <LatestRecipes data={data}/>;

  if (isLoading) {
    renderData = <Spinner/>
  }

  if (error) {
    renderData = <ErrorIndicator/>
  }

  return (
    <div className="widget">
      <div className="section-heading heading-dark">
          <h3 className="item-heading">LATEST RECIPES</h3>
      </div>
      <div className="widget-latest">
        {renderData}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recipes: state.sidebar.latestRecipes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchLatestRecipes: fetchLatestRecipes(ownProps.sosisterApi)
  }, dispatch)
}

export default WithSosisterApi(connect(mapStateToProps, mapDispatchToProps)(LatestRecipesContainer));
