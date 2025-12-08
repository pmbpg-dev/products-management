import { Form, Formik } from "formik";
import styles from "./Formik.module.css";

function FormComponent({ object, submitHandler, children, schema }) {
  return (
    <Formik
      initialValues={object}
      onSubmit={(value) => submitHandler(value)}
      validationSchema={schema}
    >
      {() => <Form className={styles.form}>{children}</Form>}
    </Formik>
  );
}

export default FormComponent;
