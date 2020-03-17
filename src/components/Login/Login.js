import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./login.scss";
import Button from "../Button";
import Card from "../Card";
import FormError from "../FormError";
import Input from "../Input";

const Login = () => {
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
    <div className="login d-flex justify-content-center align-items-center p-3">
      <div className="login__form">
        <Card className="p-4">
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
        </Card>
      </div>
    </div>
  );
};

export default Login;
