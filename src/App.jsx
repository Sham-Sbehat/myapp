import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import AddPatientHookForm from './Pages/Patient/AddPatientHookForm'
import AddPatientFormik from './Pages/Patient/AddPatientFormik'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hook" element={<AddPatientHookForm />} />
      <Route path="/formik" element={<AddPatientFormik />} />
      <Route path="*" element={<PageNotFound />} /> 
    </Routes>
  )
}