import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useFormikContext } from "formik";
import {
  StyledGridItem,
  StyledFormControl,
  StyledFormLabel,
} from "./GenderField.styled";

const GenderField = () => {
  const { values, errors, touched, handleChange } = useFormikContext();

  return (
    <StyledGridItem item xs={12}>
      <StyledFormControl
        component="fieldset"
        error={touched.gender && Boolean(errors.gender)}
      >
        <StyledFormLabel component="legend">Gender *</StyledFormLabel>
        <RadioGroup
          row
          name="gender"
          value={values.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        {touched.gender && errors.gender && (
          <FormHelperText>{errors.gender}</FormHelperText>
        )}
      </StyledFormControl>
    </StyledGridItem>
  );
};

export default GenderField;
