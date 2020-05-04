import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Slider from '../slider';
import WithSosisterApi from '../hoc/WithSosisterApi';
import SliderItem from '../slider-item';
import fetchSliderItems from '../../actions/sliderItems';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const SliderHomePage = ({data}) => {
  const renderData = data.map( (item) => <SliderItem key={item.id} item={item}/>);

  return (
    <Slider>
      {renderData}
    </Slider>
  )
}

const SliderHomePageContainer = ({slider:{data, isLoading, error}, fetchSliderItems}) => {

  useEffect( () => {
    fetchSliderItems();
  }, [])

  if (isLoading) {
    return <Spinner/>
  }

  if (error) {
    return <ErrorIndicator/>
  }

  return (
    <SliderHomePage data={data}/>
  )
}

const mapStateToProps = (state) => {
  return {
    slider: state.homePage.slider
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {sosisterApi} = ownProps;

  return bindActionCreators({
    fetchSliderItems: fetchSliderItems(sosisterApi)
  }, dispatch)
}

export default WithSosisterApi(connect(mapStateToProps, mapDispatchToProps)(SliderHomePageContainer));
