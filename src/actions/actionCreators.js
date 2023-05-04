import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE,
  CHANGE_ID_TO_EDIT,
} from "./actionTypes";
export const addService = (name, price) => {
  return { type: ADD_SERVICE, payload: { name, price } };
};
export const removeService = (id) => {
  return { type: REMOVE_SERVICE, payload: { id } };
};
export const changeService = (id, name, price) => {
  return { type: CHANGE_SERVICE, payload: { id, name, price } };
};
export const changeIdToEdit = (id) => {
  return { type: CHANGE_ID_TO_EDIT, payload: { id } };
};
