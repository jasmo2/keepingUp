import { GET_ITEMS, SET_ITEMS, SET_ITEM } from '../actions/types';

export function getItems() {
  return { type: GET_ITEMS };
}
export function setItems(items) {
  return { type: SET_ITEMS, items };
}

export function setItem(id) {
  return { type: SET_ITEM, id };
}
