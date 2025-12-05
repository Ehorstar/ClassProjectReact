import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import translations from "../Translations/Translation";
import I18nContext from "../contexts/I18nContext";

const initialValues = {
  date: "",
  dateReturn: "",
  amount: "1",
  passengers: [
    {
      name: "",
      age: "",
    },
  ],
};

const validationSchema = Yup.object().shape({
  date: Yup.string().required("This date is required"),
  dateReturn: Yup.string(),
  amount: Yup.string(),
  name: Yup.string().required("Name is required"),
  age: Yup.string(),
});

const Vacation = () => {
  const { currentTexts } = useContext(I18nContext);

  const submitHandler = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className="vacation">
      <h1>{currentTexts.vacationtitle}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <label>{currentTexts.departureday}</label>
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div>
              <label>{currentTexts.returnday}</label>
              <Field type="date" name="dateReturn" />
              <ErrorMessage
                name="dateReturn"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>{currentTexts.peopleamout}</label>
              <Field as="select" name="amount">
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </Field>

              <ErrorMessage name="amount" component="div" className="error" />
            </div>

            <div className="passenger-row">
              <div className="passenger">
                <Field
                  type="text"
                  name="name"
                  placeholder={currentTexts.name}
                />

                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="passenger">
                <Field type="text" name="age" placeholder={currentTexts.age} />

                <ErrorMessage name="age" component="div" className="error" />
              </div>
            </div>

            <button type="submit">{currentTexts.addvacation}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Vacation;
