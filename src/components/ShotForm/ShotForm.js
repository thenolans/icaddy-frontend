import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import Card from "../Card";
import FormError from "../FormError";
import http from "../../utils/http";
import Input from "../Input";
import Layout from "../Layout";
import Loader from "../Loader";
import Select from "../Select";

const ShotForm = props => {
  const [isLoading, setIsLoading] = useState(false);

  const options = [
    { value: "4", label: "4 Iron" },
    { value: "5", label: "5 Iron" },
    { value: "6", label: "6 Iron" },
    { value: "7", label: "7 Iron" },
    { value: "8", label: "8 Iron" },
    { value: "9", label: "9 Iron" },
    { value: "PW", label: "Pitching Wedge" }
  ];

  const {
    errors,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
    values
  } = useFormik({
    initialValues: {
      club: null,
      distance: ""
    },
    onSubmit: async values => {
      try {
        await http.post("/shots", { ...values, club: values.club.value });
        setIsLoading(true);
        props.history.push("/");
      } catch {}
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      club: Yup.mixed().required("Please select a club"),
      distance: Yup.number().required("Please enter a distance")
    })
  });

  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );

  return (
    <Layout>
      <Card className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Select
              name="club"
              onChange={club => {
                setFieldValue("club", club);
              }}
              options={options}
              placeholder="Select a club"
              touched={touched.topics}
              value={values.club}
            />
            {errors.club && <FormError>{errors.club}</FormError>}
          </div>

          <div className="mb-3">
            <Input
              name="distance"
              onChange={handleChange}
              placeholder="Distance"
              type="number"
              value={values.distance}
            />
            {errors.distance && <FormError>{errors.distance}</FormError>}
          </div>
          <Button fluid type="submit">
            Save
          </Button>
        </form>
      </Card>
    </Layout>
  );
};

export default ShotForm;
