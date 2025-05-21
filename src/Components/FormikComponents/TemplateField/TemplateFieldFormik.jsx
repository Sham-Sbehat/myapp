import { MenuItem } from "@mui/material";
import { useFormikContext } from "formik";
import { StyledGridItem, StyledTextField } from "./TemplateField.styled";

const TemplateField = () => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <StyledGridItem xs={12}>
      <StyledTextField
        select
        fullWidth
        label="Workspace template"
        name="template"
        value={values.template}
        onChange={handleChange}
        error={touched.template && Boolean(errors.template)}
        helperText={touched.template && errors.template}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="templateA">Template A</MenuItem>
        <MenuItem value="templateB">Template B</MenuItem>
      </StyledTextField>
    </StyledGridItem>
  );
};

export default TemplateField;
