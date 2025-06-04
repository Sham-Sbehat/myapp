import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import AddPatientHookForm from './Pages/AddPatient/AddPatientHookForm'
import AddPatientFormik from './Pages/AddPatient/AddPatientFormik'
import PatientsList from './Pages/PatientList/PatientList'
import Forms from './Pages/AddPatient/Forms'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#a11925' },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: { color: '#a11925' },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/hook" element={<AddPatientHookForm />} />
         <Route path="/myForms" element={<Forms />} />
        <Route path="/formik" element={<AddPatientFormik />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  )
}
