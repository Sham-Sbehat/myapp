
import { Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png"

const Home = () => {
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
      <Typography
        variant="h4"
        sx={{
          color: "#a11925",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Welcome in AlphaOmega!
      </Typography>

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
        {/* اللوجو */}
        <Box sx={{ mb: 4 }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              maxWidth: "150px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#a11925",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Choose Form Type
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
            onClick={() => navigate("/hook")}
            sx={{
              backgroundColor: "#a11925",
              '&:hover': {
                backgroundColor: "#821a1a",
              },
              px: 5,
              py: 2,
              fontSize: "1.1rem",
              borderRadius: 3,
              minWidth: "180px",
            }}
          >
            React Hook Form
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/formik")}
            sx={{
              color: "#a11925",
              borderColor: "#a11925",
              '&:hover': {
                backgroundColor: "#f9e6e6",
                borderColor: "#821a1a",
              },
              px: 5,
              py: 2,
              fontSize: "1.1rem",
              borderRadius: 3,
              minWidth: "180px",
            }}
          >
            Formik
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/myForms")}
            sx={{
              color: "#a11925",
              borderColor: "#a11925",
              '&:hover': {
                backgroundColor: "#f9e6e6",
                borderColor: "#821a1a",
              },
              px: 5,
              py: 2,
              fontSize: "1.1rem",
              borderRadius: 3,
              minWidth: "180px",
            }}
          >
            Left & Right Forms
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
export default Home;
