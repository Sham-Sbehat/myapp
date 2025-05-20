import { Grid, TextField } from "@mui/material";

const DateOfBirthField = ({ register, errors }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        type="date"
        label="Date of Birth"
        InputLabelProps={{ shrink: true }}
        {...register("dateOfBirth")}
        error={!!errors.dateOfBirth}
        helperText={errors.dateOfBirth?.message}
      />
    </Grid>
  );
};

export default DateOfBirthField;
