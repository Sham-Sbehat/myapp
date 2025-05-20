import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Grid,
} from "@mui/material";
import { useFormikContext } from "formik";

const GenderField = () => {
  const { values, errors, touched, handleChange } = useFormikContext();

  return (
    <Grid item xs={12} sx={{ display: "block", width: "100%" }}>
      <FormControl
        component="fieldset"
        error={touched.gender && Boolean(errors.gender)}
      >
        <FormLabel component="legend">Gender *</FormLabel>
        <RadioGroup
          row
          name="gender"
          value={values.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        {/* ✅ هاي أهم سطر لعرض رسالة الخطأ */}
        {touched.gender && errors.gender && (
          <FormHelperText>{errors.gender}</FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};

export default GenderField;
