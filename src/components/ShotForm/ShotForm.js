import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import FormError from "../FormError";
import http from "../../utils/http";
import Input from "../Input";

const ShotForm = props => {
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      club: "",
      distance: ""
    },
    onSubmit: async values => {
      try {
        await http.post("/shots", values);
        props.history.push("/");
      } catch {}
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      club: Yup.string().required("Please select a club"),
      distance: Yup.number().required("Number is required")
    })
  });
  return (
    <form onSubmit={handleSubmit}>
      <select name="club" onChange={handleChange}>
        <option value="" disabled selected>
          Select a club
        </option>
        <option value="4">4 Iron</option>
        <option value="5">5 Iron</option>
        <option value="6">6 Iron</option>
        <option value="7">7 Iron</option>
        <option value="8">8 Iron</option>
        <option value="9">9 Iron</option>
        <option value="PW">Pitching Wedge</option>
      </select>
      <div>{errors.club && <FormError>{errors.club}</FormError>}</div>

      <Input
        name="distance"
        onChange={handleChange}
        placeholder="Distance"
        type="number"
        value={values.distance}
      />
      <div>{errors.distance && <FormError>{errors.distance}</FormError>}</div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default ShotForm;
