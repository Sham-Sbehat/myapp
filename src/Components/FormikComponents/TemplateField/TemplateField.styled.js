import { styled } from "@mui/material/styles";
import { Grid, TextField } from "@mui/material";

export const StyledGridItem = styled(Grid)(() => ({
  width: "30%",
}));

export const StyledTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#a11925",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#a11925",
    },
  },
}));
