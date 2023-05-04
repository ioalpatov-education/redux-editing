import { createStore, combineReducers } from "redux";
import serviceReducer from "../reducers/serviceRerucer";

const reducer = combineReducers({
  serviceReducer: serviceReducer,
});

const store = createStore(reducer);
export default store;
