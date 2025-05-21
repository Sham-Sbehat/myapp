import { StyledGridItem, StyledTextField } from "./DateOfBirthField.styled";

const DateOfBirthField = ({ register, errors }) => {
  return (
    <StyledGridItem item xs={12}>
      <StyledTextField
        fullWidth
        type="date"
        label="Date of Birth"
        InputLabelProps={{ shrink: true }}
        {...register("dateOfBirth", {
          required: "Date of Birth is required",
          validate: value => {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // عشان نقارن بدون الوقت
            return selectedDate <= today || "Date cannot be in the future";
          }
        })}
        error={!!errors.dateOfBirth}
        helperText={errors.dateOfBirth?.message}
      />
    </StyledGridItem>
  );
};

export default DateOfBirthField;
