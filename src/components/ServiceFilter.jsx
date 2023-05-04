import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeFilter } from "../actions/actionCreators";

const ServiceFilter = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <TextField
      label="Фильтр по имени"
      variant="outlined"
      onInput={handleInput}
    />
  );
};

export default ServiceFilter;
