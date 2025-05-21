import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import FirstLastNameFields from "../../Components/HookComponents/FirstLastName/FirstLastNameFields";
import GenderField from "../../Components/HookComponents/Gender/GenderField";
import DateOfBirthField from "../../Components/HookComponents/DateOfBirth/DateOfBirthField";
import DisordersField from "../../Components/HookComponents/DisordersField/DisordersField";
import TemplateField from "../../Components/HookComponents/TemplateField/TemplateField";
import FormButtons from "../../Components/HookComponents/FormButtons/FormButtons";

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

const AddPatientFormHook = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      disorders: {},
    },
  });

  const onSubmit = (data) => {
    const watchedDisorders = watch("disorders") || {};

    const selectedDisorders = Object.entries(watchedDisorders)
      .filter(([, value]) => value)
      .map(([key]) => key);

    if (selectedDisorders.length === 0) {
      setError("disorders", {
        type: "manual",
        message: "Please select at least one disorder",
      });
      return;
    } else {
      clearErrors("disorders");
    }

    const newPatient = { ...data, disorders: selectedDisorders };

  
    const savedPatients = localStorage.getItem("patients");
    const patients = savedPatients ? JSON.parse(savedPatients) : [];

    const updatedPatients = [...patients, newPatient];


    localStorage.setItem("patients", JSON.stringify(updatedPatients));

  
    reset();
    navigate("/patients");
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
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AddPatientFormHook;
