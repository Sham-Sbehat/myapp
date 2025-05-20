import { Grid, TextField } from "@mui/material";

const FirstLastNameFields = ({ register, errors }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Grid>
    </>
  );
};

export default FirstLastNameFields;
