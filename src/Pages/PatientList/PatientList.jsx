import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";

const PatientsList = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const savedPatients = localStorage.getItem("patients");
    if (savedPatients) {
      setPatients(JSON.parse(savedPatients));
    }
  }, []);

  return (
    <Container  sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft:"100px",
        backgroundColor: "#f9f9f9",
        padding:"20px",
        flexDirection: "column",}}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#a32020" }}
      >
        Patients List
      </Typography>

      {patients.length === 0 ? (
        <Typography align="center" sx={{ mt: 4 }}>
          No patients added yet.
        </Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "100%",
            margin: "auto",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            borderRadius: 3,
            bgcolor: "#fff8f8",
          }}
        >
          <Table aria-label="patients table" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "#a32020" }}>
                {[
                  "First Name",
                  "Last Name",
                  "Gender",
                  "Date of Birth",
                  "Disorders",
                  "Template",
                ].map((header) => (
                  <TableCell
                    key={header}
                    align="center"
                    sx={{ color: "white", fontWeight: "bold", fontSize: 16 }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    "&:nth-of-type(odd)": { bgcolor: "#ffeaea" },
                    "&:nth-of-type(even)": { bgcolor: "#fff1f1" },
                    textAlign: "center",
                  }}
                >
                  <TableCell align="center">{patient.firstName}</TableCell>
                  <TableCell align="center">{patient.lastName}</TableCell>
                  <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                    {patient.gender}
                  </TableCell>
                  <TableCell align="center">{patient.dateOfBirth}</TableCell>
                  <TableCell align="center">
                    {patient.disorders.join(", ")}
                  </TableCell>
                  <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                    {patient.template}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/hook")} 
        >
          Back to Add Patient
        </Button>
      </Box>
    </Container>
  );
};

export default PatientsList;
