import React, { useContext } from "react";
import { useFormik } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";

import Button from "../Button";
import FormError from "../FormError";
import http from "../../utils/http";
import Input from "../Input";
import LoginRegisterLayout from "../LoginRegisterLayout";
import TokenContext from "../../contexts/token";
import Urls from "../../constants/urls";

const LoginForm = (props) => {
  const { token, setToken } = useContext(TokenContext);

  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setErrors }) => {
      try {
        const response = await http.post(Urls.api.login, {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        props.history.push(Urls.routes.dashboard);
      } catch {
        setErrors({
          password:
            "There was a problem logging you in, please verify your email and password",
        });
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      password: Yup.string().required(" Password is required"),
    }),
  });

  if (token) {
    return <Redirect to={Urls.routes.dashboard} />;
  }

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
        <Button fluid type="submit">
          Log In
        </Button>
      </form>
      <Link className="link text-center mt-3" to={Urls.routes.register}>
        Don't have an account? Sign up
      </Link>
    </LoginRegisterLayout>
  );
};

export default LoginForm;
