import { SET_ITEM } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ITEM:
      return action.id;
    default:
      return state;
  }
};
