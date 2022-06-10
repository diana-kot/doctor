import axios from "axios";

export const SET_VISITS = "VISITS::SET_VISITS";
export const SET_LOADED = "LOADED:SET_LOADED";

export const fetchVisits = () => (dispatch) => {
  axios.get("http://localhost:3001/visitsUser").then(({ data }) => {
    dispatch(setVisits(data));
  });
};

export const setVisits = (visits, visitCount) => ({
  type: SET_VISITS,
  payload: visits,
});


export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload,
  });