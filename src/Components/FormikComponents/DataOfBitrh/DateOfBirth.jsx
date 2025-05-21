import { useFormikContext } from "formik";
import { StyledGridItem, StyledTextField } from "./DateOfBirthField.styled";

const DateOfBirthField = () => {
  const { values, errors, touched, handleChange } = useFormikContext();

  return (
    <StyledGridItem item xs={12} sm={6}>
      <StyledTextField
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
    </StyledGridItem>
  );
};

export default DateOfBirthField;
