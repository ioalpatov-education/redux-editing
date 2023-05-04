import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { Edit, Clear } from "@mui/icons-material";

const ServiceList = () => {
  const serviceList = useSelector((state) => state.service);
  console.log(serviceList);

  return (
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
            <IconButton aria-label="delete">
              <Clear />
            </IconButton>
          </li>
        );
      })}
    </ul>
  );
};

export default ServiceList;
