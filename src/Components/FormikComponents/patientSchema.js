import * as yup from "yup";

export const patientSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-zء-ي\s]+$/, "First name must contain only letters and spaces"),

  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-zء-ي\s]+$/, "Last name must contain only letters and spaces"),

  gender: yup.string().required("Gender is required"),

  dateOfBirth: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  template: yup.string().required("Template is required"),

  disorders: yup
    .object()
    .test(
      "at-least-one",
      "Select at least one disorder",
      (value) => value && Object.values(value).some((v) => v === true)
    )
});
