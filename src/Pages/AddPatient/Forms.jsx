import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import PatientForm from "../../Components/TwoForms/PatientForm";

const TwoPatientsPage = () => {
  const form1 = useForm();
  const form2 = useForm();

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmitBoth = async () => {
    const isValid1 = await form1.trigger();
    const isValid2 = await form2.trigger();

    const data1 = form1.getValues();
    const data2 = form2.getValues();

    const selectedDisorders1 = Object.entries(data1?.disorders || {}).filter(
      ([, v]) => v
    );
    const selectedDisorders2 = Object.entries(data2?.disorders || {}).filter(
      ([, v]) => v
    );

    let disordersValid = true;

    if (selectedDisorders1.length === 0) {
      form1.setError("disorders", {
        type: "manual",
        message: "Please select at least one disorder",
      });
      disordersValid = false;
    }

    if (selectedDisorders2.length === 0) {
      form2.setError("disorders", {
        type: "manual",
        message: "Please select at least one disorder",
      });
      disordersValid = false;
    }

    if (isValid1 && isValid2 && disordersValid) {
      setSubmittedData({ patient1: data1, patient2: data2 });
      console.log("Patient 1 Data:", data1);
      console.log("Patient 2 Data:", data2);
    } else {
      alert(
        "Validation failed. Please complete all required fields and select at least one disorder."
      );
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 4,
          overflowX: "auto",
          pb: 2,
        }}
      >
        <Paper elevation={3} sx={{ p: 3, minWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Patient 1 Info
          </Typography>
          <FormProvider {...form1}>
            <PatientForm />
          </FormProvider>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, minWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Patient 2 Info
          </Typography>
          <FormProvider {...form2}>
            <PatientForm />
          </FormProvider>
        </Paper>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" onClick={handleSubmitBoth}>
          Submit Both Forms
        </Button>
      </Box>

      {submittedData && (
        <Box mt={4} p={2} sx={{ backgroundColor: "#f0f0f0", borderRadius: 1 }}>
          <Typography variant="h6">Submitted Data:</Typography>
          <Typography variant="subtitle1" mt={2}>
            Patient 1:
          </Typography>
          <pre>{JSON.stringify(submittedData.patient1, null, 2)}</pre>
          <Typography variant="subtitle1" mt={2}>
            Patient 2:
          </Typography>
          <pre>{JSON.stringify(submittedData.patient2, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default TwoPatientsPage;
