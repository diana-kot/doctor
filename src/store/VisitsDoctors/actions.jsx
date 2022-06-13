import axios from "axios";

export const SET_VISITS = "VISITS::SET_VISITS";
export const SET_LOADED = "LOADED::SET_LOADED";
export const REMOVE_VISIT = "VISITS::REMOVE_VISIT";

export const fetchVisits = () => (dispatch) => {
  axios.get("https://62a5df78b9b74f766a40b451.mockapi.io/visits").then(({ data }) => {
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

export const removeVisit = (id) => ({
  type: REMOVE_VISIT,
  payload: id,
});

export const fetchRemoveVisit = (id) => (dispatch)=> {
try {
    axios.delete(`https://62a5df78b9b74f766a40b451.mockapi.io/visits/${id}`
  );
  dispatch(removeVisit(id));
  
} catch (error) {
  alert("Ошибка при удалении записи");
  console.error(error);
}
}