import { ActionTypes } from "../constants/action-types";
export const setProducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
  //action always return the plain javascript object
};
export const selectedProduct = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
  //action always return the plain javascript object
};
