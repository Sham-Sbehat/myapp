import { useState } from "react";
import {
  Container,
  CssBaseline,
  Paper,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { patientSchema } from "../../Components/patientSchema";
import FirstLastNameFields from "../../Components/HookComponents/FirstLastNameFields";
import GenderField from "../../Components/HookComponents/GenderField";
import DateOfBirthField from "../../Components/HookComponents/DateOfBirthField";
import DisordersField from "../../Components/HookComponents/DisordersField";
import TemplateField from "../../Components/HookComponents/TemplateField";
import FormButtons from "../../Components/HookComponents/FormButtons";
const theme = createTheme({
  palette: {
    primary: { main: "#a11925" },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: { color: "#a11925" },
      },
    },
  },
});

export default function AddPatientFormHook() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: yupResolver(patientSchema),
    defaultValues: {
      disorders: {},
    },
  });

  const onSubmit = (data) => {
    const selectedDisorders = Object.entries(data.disorders || {})
      .filter(([, value]) => value)
      .map(([key]) => key);
    const result = { ...data, disorders: selectedDisorders };

    setSubmittedData(result);
    console.log(result);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Add a Patient
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={3}>
              <FirstLastNameFields register={register} errors={errors} />
              <GenderField register={register} control={control} errors={errors} />
              <DateOfBirthField register={register} errors={errors} />
              <DisordersField register={register} watch={watch} errors={errors} />
              <TemplateField register={register} errors={errors} />
              <FormButtons />
            </Grid>
          </Box>

  
          {submittedData && (
            <Box sx={{ mt: 4, whiteSpace: "pre-wrap", bgcolor: "#f5f5f5", p: 2, borderRadius: 2 }}>
              <Typography variant="h6">Submitted Data:</Typography>
              <Typography component="pre">{JSON.stringify(submittedData, null, 2)}</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
