import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { Edit, Clear } from "@mui/icons-material";
import { removeService, changeIdToEdit } from "../actions/actionCreators";

const ServiceList = () => {
  const service = useSelector((state) => state.service);

  const { servicesList, filter } = service;

  const filteredServicesList = servicesList.filter((service) => {
    return !filter
      ? true
      : service.name.toLowerCase().includes(filter.toLowerCase());
  });

  const dispatch = useDispatch();

  const removeItem = (e, id) => {
    dispatch(removeService(id));
  };

  const editItem = (e, id) => {
    dispatch(changeIdToEdit(id));
  };

  return (
    <>
      {!!servicesList.length ? (
        <ul>
          {filteredServicesList.map((item) => {
            const { id, name, price } = item;
            return (
              <li className="service-item" key={id}>
                <span>{name}</span>
                <span>{price}</span>
                <IconButton onClick={(e) => editItem(e, id)} aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={(e) => removeItem(e, id)}
                  aria-label="delete"
                >
                  <Clear />
                </IconButton>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default ServiceList;
