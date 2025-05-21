// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   Grid,
//   Box,
//   Alert,
//   createTheme,
//   ThemeProvider,
// } from "@mui/material";
// import { Formik, Form } from "formik";
// import { patientSchema } from "../../Components/FormikComponents/patientSchema";
// import FirstLastNameFields from "../../Components/FormikComponents/FisrtLastName/FirstLastNameFields";
// import GenderField from "../../Components/FormikComponents/Gender/GenderFieldFormik";
// import DateOfBirthField from "../../Components/FormikComponents/DataOfBitrh/DateOfBirth";
// import DisordersField from "../../Components/FormikComponents/Disorders/DisordersField";
// import TemplateField from "../../Components/FormikComponents/TemplateField/TemplateFieldFormik";
// import FormButtons from "../../Components/FormikComponents/FormButtons/FormButtonsFormik";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#a11925" },
//   },
//   components: {
//     MuiCheckbox: {
//       styleOverrides: {
//         root: { color: "#a11925" },
//       },
//     },
//   },
// });

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   gender: "",
//   dateOfBirth: "",
//   template: "",
//   disorders: {},
// };

// const AddPatientFormik = () => {
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = (values) => {
//     const selectedDisorders = Object.entries(values.disorders || {})
//       .filter(([, value]) => value)
//       .map(([key]) => key);

//     const finalData = {
//       ...values,
//       disorders: selectedDisorders,
//     };

//     setSubmittedData(finalData);


//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="md">
//         <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             Add a Patient
//           </Typography>

//           <Formik
//             initialValues={initialValues}
//             validationSchema={patientSchema}
//             onSubmit={handleSubmit}
//           >
//             <Form noValidate>
//               <Grid container spacing={3}>
//                 <FirstLastNameFields />
//                 <GenderField />
//                 <DateOfBirthField />
//                 <DisordersField />
//                 <TemplateField />
//                 <FormButtons />
//               </Grid>
//             </Form>
//           </Formik>
//           {submittedData && (
//             <Box mt={4}>
//               <Alert severity="info">
//                 <Typography variant="subtitle1">Form Data:</Typography>
//                 <pre style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}>
//                   {JSON.stringify(submittedData, null, 2)}
//                 </pre>
//               </Alert>
//             </Box>
//           )}
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// };
// }
// export default AddPatientFormik;
import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Alert,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Formik, Form } from "formik";
import { patientSchema } from "../../Components/FormikComponents/patientSchema";
import FirstLastNameFields from "../../Components/FormikComponents/FisrtLastName/FirstLastNameFields";
import GenderField from "../../Components/FormikComponents/Gender/GenderFieldFormik";
import DateOfBirthField from "../../Components/FormikComponents/DataOfBitrh/DateOfBirth";
import DisordersField from "../../Components/FormikComponents/Disorders/DisordersField";
import TemplateField from "../../Components/FormikComponents/TemplateField/TemplateFieldFormik";
import FormButtons from "../../Components/FormikComponents/FormButtons/FormButtonsFormik";

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

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  template: "",
  disorders: {},
};

const AddPatientFormik = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (values) => {
    const selectedDisorders = Object.entries(values.disorders || {})
      .filter(([, value]) => value)
      .map(([key]) => key);

    const finalData = {
      ...values,
      disorders: selectedDisorders,
    };

    setSubmittedData(finalData);
  };  

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Add a Patient
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={patientSchema}
            onSubmit={handleSubmit}
          >
            <Form noValidate>
              <Grid container spacing={3}>
                <FirstLastNameFields />
                <GenderField />
                <DateOfBirthField />
                <DisordersField />
                <TemplateField />
                <FormButtons />
              </Grid>
            </Form>
          </Formik>

          {submittedData && (
            <Box mt={4}>
              <Alert severity="info">
                <Typography variant="subtitle1">Form Data:</Typography>
                <pre style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(submittedData, null, 2)}
                </pre>
              </Alert>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AddPatientFormik;
