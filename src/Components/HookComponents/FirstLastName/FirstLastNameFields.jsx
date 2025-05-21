import { StyledGridItem, StyledTextField } from "./FirstLastNameFields.styled";

const FirstLastNameFields = ({ register, errors }) => {
  return (
    <>
      <StyledGridItem item xs={12} sm={6}>
        <StyledTextField
          fullWidth
          label="First Name"
          {...register("firstName", { required: "First Name is required" })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </StyledGridItem>
      <StyledGridItem item xs={12} sm={6}>
        <StyledTextField
          fullWidth
          label="Last Name"
          {...register("lastName", { required: "Last Name is required" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </StyledGridItem>
    </>
  );
};

export default FirstLastNameFields;
