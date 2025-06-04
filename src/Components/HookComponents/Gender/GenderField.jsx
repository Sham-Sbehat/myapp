import { Controller } from "react-hook-form";
import {
  StyledFormControl,
  StyledFormLabel,
  StyledRadioGroup,
  StyledFormControlLabel,
} from "./GenderField.styled";
import { FormHelperText, Radio } from "@mui/material";

const GenderField = ({ control, errors, namePrefix = "" }) => {
  const fullName = namePrefix ? `${namePrefix}.gender` : "gender";

  return (
    <StyledFormControl
      component="fieldset"
      error={!!errors?.[namePrefix]?.gender || !!errors?.gender}
      fullWidth
    >
      <StyledFormLabel component="legend">Gender *</StyledFormLabel>
      <Controller
        name={fullName}
        control={control}
        defaultValue=""
        rules={{ required: "Gender is required" }}
        render={({ field }) => (
          <StyledRadioGroup row {...field}>
            <StyledFormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
            />
            <StyledFormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </StyledRadioGroup>
        )}
      />
      {errors?.[namePrefix]?.gender && (
        <FormHelperText>{errors[namePrefix].gender.message}</FormHelperText>
      )}
      {!namePrefix && errors?.gender && (
        <FormHelperText>{errors.gender.message}</FormHelperText>
      )}
    </StyledFormControl>
  );
};

export default GenderField;
