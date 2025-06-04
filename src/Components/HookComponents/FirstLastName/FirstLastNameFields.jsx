import { StyledGridItem, StyledTextField } from "./FirstLastNameFields.styled";

const FirstLastNameFields = ({ register, errors, namePrefix = "" }) => {
  const getName = (field) => (namePrefix ? `${namePrefix}.${field}` : field);
  const getError = (field) =>
    namePrefix ? errors?.[namePrefix]?.[field] : errors?.[field];

  return (
    <>
      <StyledGridItem item xs={12} sm={6}>
        <StyledTextField
          fullWidth
          label="First Name"
          {...register(getName("firstName"), {
            required: "First Name is required",
          })}
          error={!!getError("firstName")}
          helperText={getError("firstName")?.message}
        />
      </StyledGridItem>
      <StyledGridItem item xs={12} sm={6}>
        <StyledTextField
          fullWidth
          label="Last Name"
          {...register(getName("lastName"), {
            required: "Last Name is required",
          })}
          error={!!getError("lastName")}
          helperText={getError("lastName")?.message}
        />
      </StyledGridItem>
    </>
  );
};

export default FirstLastNameFields;
