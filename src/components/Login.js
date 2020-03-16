import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required(" Password is required")
    })
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleChange}
        placeholder="email"
        value={values.email}
      />
      {errors.email && <div>{errors.email}</div>}
      <input
        name="password"
        onChange={handleChange}
        placeholder="password"
        value={values.password}
      />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
