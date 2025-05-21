import { styled } from "@mui/material/styles";
import { Grid, Box, Button } from "@mui/material";

export const StyledGridItem = styled(Grid)(() => ({
  display: "block",
  width: "100%",
}));

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  gap: 16, // يساوي gap: 2
}));

export const SaveButton = styled(Button)(() => ({
  backgroundColor: "#a32020",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#821a1a",
  },
}));

export const CancelButton = styled(Button)(() => ({
  color: "black",
  border: "none",
  "&:hover": {
    backgroundColor: "#f9e6e6",
    borderColor: "#821a1a",
  },
}));
