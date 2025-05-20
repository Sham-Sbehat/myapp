import { Grid, Box, Button } from "@mui/material";

const FormButtonsFormik = ({ isSubmitting }) => {
  return (
    <Grid item xs={12} sx={{ display: "block", width: "100%" }} >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            backgroundColor: "#a32020",
            color: "#fff",
            '&:hover': {
              backgroundColor: "#821a1a",
            },
          }}
        >
          SAVE
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            border: 'none',
            '&:hover': {
              backgroundColor: "#f9e6e6",
              borderColor: "#821a1a",
            },
          }}
        >
          CANCEL
        </Button>
      </Box>
    </Grid>
  );
};

export default FormButtonsFormik;
