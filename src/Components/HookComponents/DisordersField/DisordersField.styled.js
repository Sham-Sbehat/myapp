import { styled } from "@mui/material/styles";
import { Grid, FormControlLabel } from "@mui/material";

export const StyledGridItem = styled(Grid)(({ theme }) => ({
 
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme, checked }) => ({
  width: 100,
  height: 40,
  fontSize: 12,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: checked ? "2px solid #a11925" : "1px solid #ccc",
  borderRadius: 6,
  marginRight: 5,
  marginBottom: 8,
  padding: "1px 2px",
  backgroundColor: checked ? "#fcebec" : "transparent",
  paddingLeft: 0,
  marginLeft: 0,
}));
