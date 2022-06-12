import { SET_CARDS, SET_LOADED } from "./actions";


export const cardsState = {
  cards: [],
  isLoaded: false,
  isLoadingFailed: false,
  
};

export const cardsReducer = (state = cardsState, action) => {
  switch (action.type) {
    case SET_CARDS: {
      return {
        ...state,
        cards: action.payload,
        isLoaded: true,
      };
    }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};
