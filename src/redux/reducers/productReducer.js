import { ActionTypes } from "../constants/action-types";

//reducer always take initial state and acton
const initialState = {
  products: [
    {
      id: 1,
      title: "ashish",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
