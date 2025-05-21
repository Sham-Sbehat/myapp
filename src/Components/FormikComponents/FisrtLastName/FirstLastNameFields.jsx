import { useFormikContext } from "formik";
import { StyledGridItem, StyledTextField } from "./FirstLastNameFields.styled";

const FirstLastNameFields = () => {
  const { values, errors, touched, handleChange } = useFormikContext();

  return (
    <>
      <StyledGridItem item xs={12} sm={6}>
        <StyledTextField
          fullWidth
          label="First name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
      </StyledGridItem>
      <StyledGridItem item xs={12} sm={6}>
        <StyledTextField
          fullWidth
          label="Last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
      </StyledGridItem>
    </>
  );
};

export default FirstLastNameFields;
