import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE,
  CHANGE_ID_TO_EDIT,
} from "../actions/actionTypes";
const initialState = {
  servicesList: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ],
  idToEdit: null,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return {
        ...state,
        servicesList: [
          ...state.servicesList,
          { id: nanoid(), name, price: Number(price) },
        ],
      };
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return {
        ...state,
        idToEdit: null,
        servicesList: state.servicesList.filter((service) => service.id !== id),
      };
    }
    case CHANGE_ID_TO_EDIT: {
      const { id } = action.payload;
      return {
        ...state,
        idToEdit: id,
      };
    }
    case CHANGE_SERVICE: {
      const { id } = action.payload;
      return {
        ...state,
        idToEdit: null,
        servicesList: state.servicesList.map((service) => {
          return service.id === id
            ? {
                ...action.payload,
              }
            : service;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default serviceReducer;
