import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const GenderField = ({ control, errors }) => {
  return (
    <FormControl component="fieldset" error={!!errors.gender} fullWidth>
      <FormLabel component="legend">Gender *</FormLabel>
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RadioGroup row {...field}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        )}
      />
      {errors.gender && (
        <FormHelperText>{errors.gender.message}</FormHelperText>
      )}
    </FormControl>
  );
};

export default GenderField;
