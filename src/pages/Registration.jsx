import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import I18nContext from "../contexts/I18nContext";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be more than 2")
    .max(18, "Name must be less 18")
    .required("Name is required"),

  email: Yup.string().email().required(),

  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password incorrect"
    )
    .required(),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required(),
});

const Registration = () => {
  const { currentTexts } = useContext(I18nContext);
  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="registration">
      <h1>{currentTexts.registration}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="name" placeholder={currentTexts.name} />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder={currentTexts.email}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder={currentTexts.password}
              />

              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <Field
                name="repeatPassword"
                type="password"
                placeholder={currentTexts.repeatPassword}
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                className="error"
              />
            </div>

            <button type="submit">{currentTexts.registration}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
