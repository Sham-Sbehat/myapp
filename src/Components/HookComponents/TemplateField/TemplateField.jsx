import { MenuItem } from "@mui/material";
import { StyledBox, StyledTextField } from "./TemplateForm.styled";

const TemplateForm = ({ register, errors }) => {
  return (
    <StyledBox>
      <StyledTextField
        select
        fullWidth
        label="Workspace Template"
        {...register("template", { required: "Please select a template" })}
        error={!!errors.template}
        helperText={errors.template?.message}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="templateA">Template A</MenuItem>
        <MenuItem value="templateB">Template B</MenuItem>
      </StyledTextField>
    </StyledBox>
  );
};

export default TemplateForm;
