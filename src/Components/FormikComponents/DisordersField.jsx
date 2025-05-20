import React from "react";
import {
  Grid,
  FormLabel,
  Box,
  Checkbox,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useFormikContext } from "formik";

const disorderOptions = [
  "PD",
  "ET",
  "Dyst_G",
  "Dyst_NG",
  "OCD",
  "Tourette",
  "Epilepsy",
  "Other",
];

const DisordersField = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const handleCheckboxChange = (event) => {
    setFieldValue(`disorders.${event.target.name}`, event.target.checked);
  };

  return (
    <Grid item xs={12}>
      <FormLabel component="legend" sx={{ color: "#a11925", mb: 1 }}>
        Disorders
      </FormLabel>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {disorderOptions.map((option) => {
          const checked = !!values.disorders?.[option];
          return (
            <Box
              key={option}
              sx={{
                width: 100,
                height: 40,
                border: checked ? "2px solid #a11925" : "1px solid #ccc",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: "8px",
                backgroundColor: checked ? "#fcebec" : "transparent",
                cursor: "pointer",
              }}
              onClick={() =>
                setFieldValue(`disorders.${option}`, !checked)
              }
            >
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                name={option}
                sx={{
                  padding: "0 4px 0 0",
                  color: "#a11925",
                  "&.Mui-checked": {
                    color: "#a11925",
                  },
                }}
              />
              <Typography variant="body2">{option}</Typography>
            </Box>
          );
        })}
      </Box>
      {touched.disorders && typeof errors.disorders === "string" && (
        <FormHelperText error>{errors.disorders}</FormHelperText>
      )}
    </Grid>
  );
};

export default DisordersField;
