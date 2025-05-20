import React from "react";
import { Grid, TextField, MenuItem } from "@mui/material";
import { useFormikContext } from "formik";

const TemplateField = () => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <Grid item xs={12} sx={{width: "30%" }}  >
      <TextField
        select
        fullWidth
        label="Workspace template"
        name="template"
        value={values.template}
        onChange={handleChange}
        error={touched.template && Boolean(errors.template)}
        helperText={touched.template && errors.template}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="templateA">Template A</MenuItem>
        <MenuItem value="templateB">Template B</MenuItem>
      </TextField>
    </Grid>
  );
};

export default TemplateField;
