import { StyledGrid, SaveButton, CancelButton } from "./FormButtons.styled";

const FormButtons = () => {
  return (
    <StyledGrid item xs={12}>
      <SaveButton type="submit" variant="contained">
        SAVE
      </SaveButton>
      <CancelButton variant="outlined">
        CANCEL
      </CancelButton>
    </StyledGrid>
  );
};

export default FormButtons;
