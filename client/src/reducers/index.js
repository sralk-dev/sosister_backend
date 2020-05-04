import {combineReducers} from 'redux';

import homePageReducer from './homePageReducer';
import categoryPageReducer from './categoryPageReducer';
import detailPageReducer from './detailPageReducer';
import sidebarReducer from './sidebarReducer';
import recipePageReducer from './recipePageReducer';


const rootReducer = combineReducers({
  homePage: homePageReducer,
  categoryPage: categoryPageReducer,
  detailPage: detailPageReducer,
  sidebar: sidebarReducer,
  recipePage: recipePageReducer
});

export default rootReducer;