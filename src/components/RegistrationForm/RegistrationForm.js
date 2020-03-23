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

const RegistrationForm = props => {
  const { token, setToken } = useContext(TokenContext);
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async (values, { setErrors }) => {
      try {
        const response = await http.post("/register", {
          email: values.email,
          password: values.password
        });
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        props.history.push("/");
      } catch (err) {
        setErrors({
          confirmPassword:
            err?.response?.data?.error ||
            "There was a problem with your registration, please try again"
        });
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      password: Yup.string().required(" Password is required"),
      confirmPassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords do not match"
        )
      })
    })
  });

  if (token) {
    return <Redirect to="/" />;
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
        <div className="mb-3">
          <Input
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm password"
            value={values.confirmPassword}
            type="password"
          />
          {errors.confirmPassword && (
            <FormError>{errors.confirmPassword}</FormError>
          )}
        </div>
        <Button fluid type="submit">
          Register
        </Button>
      </form>
      <Link className="link text-center mt-3" to="/login">
        Already have an account? Log in{" "}
      </Link>
    </LoginRegisterLayout>
  );
};

export default RegistrationForm;
