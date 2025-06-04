import { MenuItem } from "@mui/material";
import { StyledBox, StyledTextField } from "./TemplateForm.styled";
import { Controller } from "react-hook-form";

const TemplateField = ({ control, errors, index, namePrefix = "" }) => {
  const fullName = namePrefix
    ? `${namePrefix}[${index}]`
    : `template[${index}]`;
  const errorObj = namePrefix
    ? errors?.[namePrefix]?.[index]
    : errors?.template?.[index];

  return (
    <StyledBox>
      <Controller
        name={fullName}
        control={control}
        defaultValue=""
        rules={{ required: "Please select a template" }}
        render={({ field }) => (
          <StyledTextField
            select
            fullWidth
            label={`Workspace Template #${index + 1}`}
            value={field.value}
            onChange={field.onChange}
            error={!!errorObj}
            helperText={errorObj?.message}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="templateA">Template A</MenuItem>
            <MenuItem value="templateB">Template B</MenuItem>
            <MenuItem value="templateC">Template C</MenuItem>
          </StyledTextField>
        )}
      />
    </StyledBox>
  );
};

export default TemplateField;
