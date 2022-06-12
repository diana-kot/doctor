import axios from "axios";

export const SET_CARDS = "CARDS::SET_CARDS";
export const SET_LOADED = "LOADED:SET_LOADED";

export const fetchCards = () => (dispatch) => {
  axios.get("http://localhost:3001/cards").then(({ data }) => {
    dispatch(setCards(data));
  });
};

export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards,
});


export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload,
  });