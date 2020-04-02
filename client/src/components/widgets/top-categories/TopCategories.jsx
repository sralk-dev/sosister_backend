import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import WithSosisterApi from '../../hoc/WithSosisterApi';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';
import {fetchTopCategories} from '../../../actions'

import './TopCategories.css';

const TopCategoriesItem = ({title, count}) => {
  return (
    <a href="#">{title}
      <span>{count}</span>
    </a>
  )
}

const TopCategories = ({data}) => {
  const renderData = data.map( (item) => <li key={item.id}><TopCategoriesItem title={item.title} count={item.count}/></li>)

  return (
    <ul>
      {renderData}
    </ul>
  )
}

const TopCategoriesContainer = ({categories: {data, isLoading, error}, fetchTopCategories}) => {

  useEffect( () => {
    fetchTopCategories()
  }, [])

  let renderData = <TopCategories data={data}/>

  if (isLoading) {
    renderData = <Spinner/>
  }

  if (error) {
    renderData = <ErrorIndicator/>
  }

  return (
    <div class="widget">
      <div class="section-heading heading-dark">
        <h3 class="item-heading">CATEGORIES</h3>
      </div>
      <div class="widget-categories">
        {renderData}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.sidebar.topCategories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchTopCategories: fetchTopCategories(ownProps.sosisterApi)
  }, dispatch)
}

export default WithSosisterApi(connect(mapStateToProps, mapDispatchToProps)(TopCategoriesContainer));
