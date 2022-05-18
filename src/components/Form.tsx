import React from "react";
import { Formik } from "formik";
import { TextInput } from "./TextInput";
import * as Yup from "yup";

export const Form = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters")
      .required("First Name cannot be empty"),

    lastName: Yup.string()
      .max(15, "Must be 15 characters")
      .required("Last Name cannot be empty"),

    email: Yup.string()
      .email("Looks like this is not an email")
      .max(24, "Must be 25 characters")
      .required("Email cannot be empty"),

    password: Yup.string()
      .min(6, "Must be minimun 6 characters")
      .required("Password cannot be empty"),
  });

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validate}
    >
      {() => (
        <form action="" className="form__container">
          <TextInput name="firstName" type="text" placeholder="First Name" />
          <TextInput name="lastName" type="text" placeholder="Last Name" />
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="password" type="password" placeholder="Password" />
          <button type="submit" className="form__button">
            CLAIM YOUR FREE TRIAL
          </button>
          <span className="form__span">
            By clicking the button, you are agreeing to our{" "}
            <strong className="form__span-strong">Terms and Services</strong>{" "}
          </span>
        </form>
      )}
    </Formik>
  );
};
