import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(38, "Too Long!")
    .required("Name is required!"),
  email: Yup.string()
    .email("You must enter valid email address!")
    .required("Email address is required!"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(38, "Too Long!")
    .required("Password is required!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <Form className={css.form}>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" as="span" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" as="span" />
          </div>

          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" as="span" />
          </div>

          <div>
            <button type="submit">Registration</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
