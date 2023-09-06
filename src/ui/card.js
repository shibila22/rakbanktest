import { Card, styled } from '@mui/material';

export const CustomCard = styled(Card)({
  borderRadius: '30px',
  paddingBottom: '0',
  '& .MuiCardContent-root': {
    padding: 0,
    '&:last-child': { paddingBottom: 0 },
  },
});
