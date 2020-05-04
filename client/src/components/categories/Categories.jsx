import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CategoryItem from '../category-item';
import WithSosisterApi from '../hoc/WithSosisterApi';
import fetchCategories from '../../actions/categories';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const Categories = ({data}) => {

  const renderData = data.map( (item) => <CategoryItem key={item.id} category={item}/>);

  return (
    <section className="category-page-wrap padding-top-80 padding-bottom-50">
      <div className="container">
        <div className="row">
          {renderData}
        </div>
      </div>
    </section>
  )
}

const CategoriesContainer = ({categories: {data, isLoading, error}, fetchCategories}) => {

  useEffect( () => {
    fetchCategories();
  }, []);

  if (isLoading) {
    return <Spinner/>
  }

  if (error) {
    return <ErrorIndicator/>
  }

  return (
    <Categories data={data}/>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryPage.categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchCategories: fetchCategories(ownProps.sosisterApi)
  }, dispatch)
}

export default WithSosisterApi(connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer))
