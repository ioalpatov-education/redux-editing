import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE,
} from "../actions/actionTypes";
const initialState = {
  servicesList: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ],
  formType: "create",
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
        servicesList: state.servicesList.filter((service) => service.id !== id),
      };
    }
    case CHANGE_SERVICE: {
      const { id, name, price } = action.payload;
      return {
        ...state,
        servicesList: state.servicesList.map((service) => {
          return service.id === id
            ? {
                name,
                price,
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
