import { StyledGridItem, StyledBox, SaveButton, CancelButton } from "./FormButtonsFormik.styled";

const FormButtonsFormik = ({ isSubmitting }) => {
  return (
    <StyledGridItem item xs={12}>
      <StyledBox>
        <SaveButton
          type="submit"
          variant="contained"
          disabled={isSubmitting}
        >
          SAVE
        </SaveButton>
        <CancelButton variant="outlined">
          CANCEL
        </CancelButton>
      </StyledBox>
    </StyledGridItem>
  );
};

export default FormButtonsFormik;
