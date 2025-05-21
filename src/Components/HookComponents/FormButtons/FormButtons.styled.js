import { styled } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";

export const StyledGrid = styled(Grid)({
  display: "block",
  width: "100%",
});

export const SaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#a32020",
  color: "#fff",
  marginRight: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#821a1a",
  },
}));

export const CancelButton = styled(Button)({
  color: "black",
  border: "none",
  "&:hover": {
    backgroundColor: "#f9e6e6",
    borderColor: "#821a1a",
  },
});
