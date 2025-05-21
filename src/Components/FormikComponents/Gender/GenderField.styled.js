import { styled } from "@mui/material/styles";
import { Grid, FormControl, FormLabel } from "@mui/material";

export const StyledGridItem = styled(Grid)(() => ({
  display: "block",
  width: "100%",
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: "100%",
}));

export const StyledFormLabel = styled(FormLabel)(() => ({
  color: "#a11925",
  marginBottom: "8px",
}));
