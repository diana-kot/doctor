import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { visitsDoctorReducer } from "./VisitsDoctors/reducers";


const rootReducer = combineReducers({
  visits: visitsDoctorReducer,
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
