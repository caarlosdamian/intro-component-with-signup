import React from "react";
import { Formik } from "formik";
import { TextInput } from "./TextInput";

export const Form = () => {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <form action="" className="form__container">
                    <TextInput name="firstName" type="text" placeholder="First Name" />
                    <TextInput name="lastName" type="text" placeholder="Last Name" />
                    <TextInput name="email" type="email" placeholder="Email" />
                    <TextInput name="firstName" type="text" placeholder="First Name" />
                    <button className="form__button">CLAIM YOUR FREE TRIAL</button>
                    <span className="form__span">By clicking the button, you are agreeing to our <strong className="form__span-strong">
                        Terms and Services
                    </strong>  </span>
                </form>
            )}
        </Formik>
    );
};
