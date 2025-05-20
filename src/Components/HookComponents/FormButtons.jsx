import { Grid, Button } from "@mui/material";

const FormButtons = () => {
  return (
    <Grid item xs={12} sx={{ display: "block", width: "100%" }}>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#a32020",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#821a1a",
          },
          mr: 2,
        }}
      >
        SAVE
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          border: "none",
          "&:hover": {
            backgroundColor: "#f9e6e6",
            borderColor: "#821a1a",
          },
        }}
      >
        CANCEL
      </Button>
    </Grid>
  );
};

export default FormButtons;
