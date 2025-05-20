import React from "react";
import { Grid, TextField } from "@mui/material";
import { useFormikContext } from "formik";

const FirstLastNameFields = () => {
  const { values, errors, touched, handleChange } = useFormikContext();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
      </Grid>
    </>
  );
};

export default FirstLastNameFields;
