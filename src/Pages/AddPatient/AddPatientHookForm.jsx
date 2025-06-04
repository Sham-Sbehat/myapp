import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography, Box, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const [templateCount, setTemplateCount] = useState(1); // عدد حقول TemplateField

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
      template: [""], // هنا تأكدت انه template له قيمة ابتدائية (فارغة) لتجنب undefined
    },
  });

  const onSubmit = (data) => {
    // disorders:
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

    // newPatient:
    const newPatient = { ...data, disorders: selectedDisorders };

    // patients from localStorage:
    const savedPatients = localStorage.getItem("patients");
    const patients = savedPatients ? JSON.parse(savedPatients) : [];
    const updatedPatients = [...patients, newPatient];
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    // data.template is an object or array? بسبب تسميتنا template[index], هي مصفوفة
    const templates = data.template || [];

    alert(
      `Patient Info:\n\n` +
        `First Name: ${data.firstName}\n` +
        `Last Name: ${data.lastName}\n` +
        `Gender: ${data.gender}\n` +
        `Date of Birth: ${data.dateOfBirth}\n` +
        `Disorders: ${selectedDisorders.join(", ") || "None"}\n` +
        `Templates: ${templates.filter(Boolean).join(", ") || "None"}`
    );

    reset();
    navigate("/patients");
  };

  // const handleAddTemplate = () => {
  //   setTemplateCount((prev) => prev + 1);
  // };

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
              <GenderField
                register={register}
                control={control}
                errors={errors}
              />
              <DateOfBirthField register={register} errors={errors} />
              <DisordersField
                register={register}
                watch={watch}
                errors={errors}
              />

              {[...Array(templateCount)].map((_, index) => (
                <TemplateField
                  key={index}
                  control={control}
                  errors={errors}
                  index={index}
                />
              ))}

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setTemplateCount((c) => c + 1)}
                >
                  Add Workspace
                </Button>
              </Grid>

              <FormButtons />
            </Grid>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AddPatientFormHook;
