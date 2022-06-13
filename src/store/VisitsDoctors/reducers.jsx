import { SET_VISITS, SET_LOADED, REMOVE_VISIT } from "./actions";

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

    case REMOVE_VISIT:
      return {
        ...state,
        visits: state.visits.filter(visit => visit.id !== action.payload)
      };

    default:
      return state;
  }
};
