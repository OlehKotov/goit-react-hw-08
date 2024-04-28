import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginSchema = Yup.object().shape({
  
  email: Yup.string()
    .email("You must enter valid email address!")
    .required("Email address is required!"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(38, "Too Long!")
    .required("Password is required!"),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
       
        <div >
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" as="span" />
        </div>

        <div >
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" as="span" />
        </div>

        <div>
          <button type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
