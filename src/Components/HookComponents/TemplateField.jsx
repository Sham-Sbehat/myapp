import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";

const TemplateForm = ({ register, errors }) => {
  return (
    <Box sx={{ width: 300 }} >
      <TextField
        select
        fullWidth
        label="Workspace Template"
        {...register("template")}
        error={!!errors.template}
        helperText={errors.template?.message}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="templateA">Template A</MenuItem>
        <MenuItem value="templateB">Template B</MenuItem>
      </TextField>
    </Box>
  );
};

export default TemplateForm;
