// src/pages/NotFound.jsx
import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 4,
          backgroundColor: "#fff",
          textAlign: "center",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#a11925",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Sorry,Pagge Not Found!!
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#a11925",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          404
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            mt: 5,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#a11925",
              "&:hover": {
                backgroundColor: "#821a1a",
              },
              px: 5,
              py: 2,
              fontSize: "1.1rem",
              borderRadius: 3,
              minWidth: "180px",
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default NotFound;
