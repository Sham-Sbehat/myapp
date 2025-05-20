import React from "react";
import { Grid, TextField } from "@mui/material";
import { useFormikContext } from "formik";

const DateOfBirthField = () => {
  const { values, errors, touched, handleChange } = useFormikContext();

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        type="date"
        label="Date of birth"
        name="dateOfBirth"
        value={values.dateOfBirth}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
        helperText={touched.dateOfBirth && errors.dateOfBirth}
      />
    </Grid>
  );
};

export default DateOfBirthField;
