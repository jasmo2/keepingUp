import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import itemReducer from './itemReducer';

export default combineReducers({
  itemsReducer,
  itemReducer
});
