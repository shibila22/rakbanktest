import { Divider, styled } from '@mui/material';
export const CustomDivider = styled(Divider)(({ theme }) => ({
  borderWidth: '1px',
  margin: '20px 30px',
  backgroundColor: theme.palette.divider,
}));
