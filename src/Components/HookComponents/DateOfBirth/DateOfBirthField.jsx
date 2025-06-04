import { StyledGridItem, StyledTextField } from "./DateOfBirthField.styled";

const getError = (errors, name) => {
  if (!errors) return undefined;
  return name.split(".").reduce((acc, part) => acc && acc[part], errors);
};

const DateOfBirthField = ({ register, errors, namePrefix = "" }) => {
  const fieldName = namePrefix ? `${namePrefix}.dateOfBirth` : "dateOfBirth";
  const fieldError = getError(errors, fieldName);

  return (
    <StyledGridItem item xs={12}>
      <StyledTextField
        fullWidth
        type="date"
        label="Date of Birth"
        InputLabelProps={{ shrink: true }}
        {...register(fieldName, {
          required: "Date of Birth is required",
          validate: (value) => {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selectedDate <= today || "Date cannot be in the future";
          },
        })}
        error={!!fieldError}
        helperText={fieldError?.message}
      />
    </StyledGridItem>
  );
};

export default DateOfBirthField;
