import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addService } from "../actions/actionCreators";

const ServiceFormSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  price: Yup.number()
    .required("Обязательное поле")
    .positive("Цена должна быть больше 0"),
});

const ServiceForm = () => {
  const initialValues = {
    name: "",
    price: "",
  };

  const formType = useSelector((state) => state.service.formType);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, price } = values;
    switch (formType) {
      case "create": {
        dispatch(addService(name, price));
        break;
      }

      default: {
        break;
      }
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={ServiceFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className="service__form">
        <div className="form-group">
          <Field
            className="form-field"
            type="text"
            name="name"
            placeholder="name"
          />
          <p className="error-text">
            <ErrorMessage name="name" />
          </p>
        </div>
        <div className="form-group">
          <Field
            className="form-field"
            type="number"
            name="price"
            placeholder="price"
          />
          <p className="error-text">
            <ErrorMessage name="price" />
          </p>
        </div>
        <Button
          className="form__btn"
          variant="outlined"
          color="success"
          type="submit"
        >
          Save
        </Button>

        {formType === "edit" ? (
          <Button
            className="form__btn"
            variant="outlined"
            color="info"
            type="submit"
          >
            Cancel
          </Button>
        ) : null}
      </Form>
    </Formik>
  );
};

export default ServiceForm;
