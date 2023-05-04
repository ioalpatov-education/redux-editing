import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { Edit, Clear } from "@mui/icons-material";
import { removeService } from "../actions/actionCreators";

const ServiceList = () => {
  const serviceList = useSelector((state) => state.service.servicesList);

  const dispatch = useDispatch();

  const removeItem = (e, id) => {
    dispatch(removeService(id));
  };

  return (
    <>
      {!!serviceList.length ? (
        <ul>
          {serviceList.map((item) => {
            const { id, name, price } = item;
            return (
              <li className="service-item" key={id}>
                <span>{name}</span>
                <span>{price}</span>
                <IconButton aria-label="edit">
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
