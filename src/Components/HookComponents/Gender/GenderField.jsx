import { Controller } from "react-hook-form";
import {
  StyledFormControl,
  StyledFormLabel,
  StyledRadioGroup,
  StyledFormControlLabel,
} from "./GenderField.styled";
import { FormHelperText, Radio } from "@mui/material";  // هنا أضفت Radio

const GenderField = ({ control, errors }) => {
  return (
    <StyledFormControl component="fieldset" error={!!errors.gender} fullWidth>
      <StyledFormLabel component="legend">Gender *</StyledFormLabel>
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        rules={{ required: "Gender is required" }}
        render={({ field }) => (
          <StyledRadioGroup row {...field}>
            <StyledFormControlLabel value="male" control={<Radio />} label="Male" />
            <StyledFormControlLabel value="female" control={<Radio />} label="Female" />
          </StyledRadioGroup>
        )}
      />
      {errors.gender && (
        <FormHelperText>{errors.gender.message}</FormHelperText>
      )}
    </StyledFormControl>
  );
};

export default GenderField;
