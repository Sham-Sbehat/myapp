import { useFormContext } from "react-hook-form";
import { Box, Grid } from "@mui/material";

import FirstLastNameFields from "../../Components/HookComponents/FirstLastName/FirstLastNameFields";
import GenderField from "../../Components/HookComponents/Gender/GenderField";
import DateOfBirthField from "../../Components/HookComponents/DateOfBirth/DateOfBirthField";
import DisordersField from "../../Components/HookComponents/DisordersField/DisordersField";
import TemplateField from "../../Components/HookComponents/TemplateField/TemplateField";

const PatientForm = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FirstLastNameFields register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <GenderField control={control} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <DateOfBirthField register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <DisordersField register={register} watch={watch} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <TemplateField control={control} errors={errors} index={0} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientForm;
