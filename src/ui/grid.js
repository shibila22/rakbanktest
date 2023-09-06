import { Grid, styled } from '@mui/material';

export const StyledContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const RightGrid = styled(Grid)(({ theme }) => ({
  background: theme.gridGradient,
}));
