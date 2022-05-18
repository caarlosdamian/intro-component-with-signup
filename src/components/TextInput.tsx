import React from "react";
import { FieldHookConfig, useField, ErrorMessage } from "formik";
import iconError from '../images/icon-error.svg'

export const TextInput = (props:any) => {
  const [field, meta] = useField(props);

  return (
    <div className="input__form-container">
      <input
        {...field}
        {...props}
        className={`input__text ${meta.touched && meta.error && "is-invalid"}`}
      />
      <img className={`incon-error ${meta.touched && meta.error && "display-span"}`} src={iconError} alt="" />
      <ErrorMessage
        component="span"
        name={field.name}
        className='input__span-error'
      />
    </div>
  );
};
