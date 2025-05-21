import { styled } from "@mui/material/styles";
import { Grid, FormLabel, Box, FormHelperText } from "@mui/material";

export const StyledGridItem = styled(Grid)(() => ({}));

export const StyledFormLabel = styled(FormLabel)(() => ({
  color: "#a11925",
  marginBottom: "8px",
}));

export const StyledBoxContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

export const StyledDisorderBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
})(({ checked }) => ({
  width: 100,
  height: 40,
  border: checked ? "2px solid #a11925" : "1px solid #ccc",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "8px",
  backgroundColor: checked ? "#fcebec" : "transparent",
  cursor: "pointer",
}));

export const StyledFormHelperText = styled(FormHelperText)(() => ({
  color: "#d32f2f",
}));
