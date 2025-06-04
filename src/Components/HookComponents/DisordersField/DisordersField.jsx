import {
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@mui/material";

import {
  StyledGridItem,
  StyledFormControlLabel,
} from "./DisordersField.styled";

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

export default function DisordersField({
  register,
  watch,
  errors,
  namePrefix = "",
}) {
  const getName = (disorder) =>
    namePrefix
      ? `${namePrefix}.disorders.${disorder}`
      : `disorders.${disorder}`;

  const getDisordersError = () =>
    namePrefix ? errors?.[namePrefix]?.disorders : errors?.disorders;

  return (
    <StyledGridItem item xs={12}>
      <FormControl
        component="fieldset"
        sx={{ width: "100%" }}
        error={!!getDisordersError()}
      >
        <FormLabel component="legend">Disorders</FormLabel>
        <FormGroup row>
          {disordersList.map((disorder) => {
            const isChecked = watch(getName(disorder)) || false;
            return (
              <StyledFormControlLabel
                key={disorder}
                control={
                  <Checkbox
                    {...register(getName(disorder))}
                    checked={isChecked}
                  />
                }
                label={disorder}
                checked={isChecked}
              />
            );
          })}
        </FormGroup>
        {getDisordersError() && (
          <FormHelperText>{getDisordersError().message}</FormHelperText>
        )}
      </FormControl>
    </StyledGridItem>
  );
}
