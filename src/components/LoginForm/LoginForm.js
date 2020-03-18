import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Button from "../Button";
import FormError from "../FormError";
import Input from "../Input";
import LoginRegisterLayout from "../LoginRegisterLayout";

const LoginForm = () => {
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { setErrors }) => {
      try {
        const response = await axios.post("http://localhost:3090/login", {
          email: values.email,
          password: values.password
        });
        console.log(response.data.token);
      } catch {
        setErrors({
          password:
            "There was a problem logging you in, please verify your email and password"
        });
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      password: Yup.string().required(" Password is required")
    })
  });

  return (
    <LoginRegisterLayout>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={values.email}
          />
          {errors.email && <FormError>{errors.email}</FormError>}
        </div>
        <div className="mb-3">
          <Input
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={values.password}
            type="password"
          />
          {errors.password && <FormError>{errors.password}</FormError>}
        </div>
        <Button type="submit">Log In</Button>
      </form>

      <Link className="link text-center mt-3" to="/register">
        Don't have an account? Sign up
      </Link>
    </LoginRegisterLayout>
  );
};

export default LoginForm;
