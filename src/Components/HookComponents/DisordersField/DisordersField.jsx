// import {
//   Grid,
//   FormControl,
//   FormLabel,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   FormHelperText,
// } from "@mui/material";

// const disordersList = [
//   "PD",
//   "ET",
//   "Dyst_G",
//   "Dyst_NG",
//   "OCD",
//   "Tourette",
//   "Epilepsy",
//   "Other",
// ];

// export default function DisordersField({ register, watch, errors }) {
//   return (
//     <Grid item xs={12}>
//       <FormControl
//         component="fieldset"
//         sx={{ width: "100%" }}
//         error={!!errors?.disorders}
//       >
//         <FormLabel component="legend">Disorders</FormLabel>
//         <FormGroup row>
//           {disordersList.map((disorder) => (
//             <FormControlLabel
//               key={disorder}
//               control={
//                 <Checkbox
//                   {...register(`disorders.${disorder}`)}
//                   checked={watch(`disorders.${disorder}`) || false}
//                 />
//               }
//               label={disorder}
//               sx={{
//                 width: 100,
//                 height: 40,
//                 font: 12,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 border: watch(`disorders.${disorder}`)
//                   ? "2px solid #a11925"
//                   : "1px solid #ccc",
//                 borderRadius: "6px",
//                 marginRight: "5px",
//                 marginBottom: "8px",
//                 padding: "1px 2px",
//                 backgroundColor: watch(`disorders.${disorder}`)
//                   ? "#fcebec"
//                   : "transparent",
//                 pl: 0,
//                 ml: 0,
//               }}
//             />
//           ))}
//         </FormGroup>
//         {errors?.disorders && (
//           <FormHelperText>{errors.disorders.message}</FormHelperText>
//         )}
//       </FormControl>
//     </Grid>
//   );
// }
import React from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@mui/material";

import { StyledGridItem, StyledFormControlLabel } from "./DisordersField.styled";

const disordersList = [
  "PD",
  "ET",
  "Dyst_G",
  "Dyst_NG",
  "OCD",
  "Tourette",
  "Epilepsy",
  "Other",
];

export default function DisordersField({ register, watch, errors }) {
  return (
    <StyledGridItem item xs={12}>
      <FormControl
        component="fieldset"
        sx={{ width: "100%" }}
        error={!!errors?.disorders}
      >
        <FormLabel component="legend">Disorders</FormLabel>
        <FormGroup row>
          {disordersList.map((disorder) => {
            const isChecked = watch(`disorders.${disorder}`) || false;
            return (
              <StyledFormControlLabel
                key={disorder}
                control={
                  <Checkbox
                    {...register(`disorders.${disorder}`)}
                    checked={isChecked}
                  />
                }
                label={disorder}
                checked={isChecked}  // بنمررها للستايلد كومبوننت
              />
            );
          })}
        </FormGroup>
        {errors?.disorders && (
          <FormHelperText>{errors.disorders.message}</FormHelperText>
        )}
      </FormControl>
    </StyledGridItem>
  );
}
