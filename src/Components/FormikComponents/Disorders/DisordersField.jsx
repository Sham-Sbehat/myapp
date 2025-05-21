import { Checkbox, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import {
  StyledGridItem,
  StyledFormLabel,
  StyledBoxContainer,
  StyledDisorderBox,
  StyledFormHelperText,
} from "./DisordersField.styled";

const disorderOptions = [
  "PD",
  "ET",
  "Dyst_G",
  "Dyst_NG",
  "OCD",
  "Tourette",
  "Epilepsy",
  "Other",
];

const DisordersField = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const handleCheckboxChange = (event) => {
    setFieldValue(`disorders.${event.target.name}`, event.target.checked);
  };

  return (
    <StyledGridItem item xs={12}>
      <StyledFormLabel component="legend">Disorders</StyledFormLabel>
      <StyledBoxContainer>
        {disorderOptions.map((option) => {
          const checked = !!values.disorders?.[option];
          return (
            <StyledDisorderBox
              key={option}
              checked={checked ? 1 : 0}
              onClick={() =>
                setFieldValue(`disorders.${option}`, !checked)
              }
            >
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                name={option}
                sx={{
                  padding: "0 4px 0 0",
                  color: "#a11925",
                  "&.Mui-checked": {
                    color: "#a11925",
                  },
                }}
              />
              <Typography variant="body2">{option}</Typography>
            </StyledDisorderBox>
          );
        })}
      </StyledBoxContainer>
      {touched.disorders && typeof errors.disorders === "string" && (
        <StyledFormHelperText>{errors.disorders}</StyledFormHelperText>
      )}
    </StyledGridItem>
  );
};

export default DisordersField;
