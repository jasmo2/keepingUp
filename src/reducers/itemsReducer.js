import { GET_ITEMS, SET_ITEMS } from '../actions/types';

const items = {
    items: [
        { txt: '¡Aprendamos react native!', complete: false },
        { txt: 'To-Doing it', complete: true }
    ]
};

export default (state = items, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return state;
    case SET_ITEMS: //eslint-disable-line
      const newItems = Object.assign([], action.items);
      return { items: newItems };
    default:
      return state;
  }
};
