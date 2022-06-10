import { SET_VISITS, SET_LOADED } from "./actions";


export const visitState = {
  visits: [],
  isLoaded: false,
  isLoadingFailed: false,
  visitCount: 0,
};

export const visitsDoctorReducer = (state = visitState, action) => {
  switch (action.type) {
    case SET_VISITS: {
      return {
        ...state,
        visits: action.payload,
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
