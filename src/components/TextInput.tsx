import { FieldHookConfig, useField } from "formik";
import React from "react";

export const TextInput = (props: React.InputHTMLAttributes<HTMLInputElement> & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
   
      <input {...props} className="input__text" />
  );
};
