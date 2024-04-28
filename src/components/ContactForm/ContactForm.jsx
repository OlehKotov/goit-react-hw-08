import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { FORM_INITIAL_VALUES } from "../../utils/constants";
// import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formLabel}>
          <label>Name</label>
          <Field
            type="text"
            name="name"
            className={css.formInput}
          />
          <ErrorMessage name="name" as="span" />
        </div>

        <div className={css.formLabel}>
          <label>Number</label>
          <Field
            type="phone"
            name="number"
            className={css.formInput}
          />
          <ErrorMessage name="number" as="span" />
        </div>

        <div className={css.buttonContainer}>
          <button type="submit" className={css.formButton}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
