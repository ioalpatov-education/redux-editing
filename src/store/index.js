import { createStore, combineReducers } from "redux";
import serviceReducer from "../reducers/serviceRerucer";

const reducer = combineReducers({
  service: serviceReducer,
});

const store = createStore(reducer);
export default store;
