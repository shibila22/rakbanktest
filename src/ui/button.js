import { Button, styled } from '@mui/material';
export const SignUpButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '18px',
  textTransform: 'revert',
}));

export const SignInButton = styled(Button)(({ theme }) => ({
  marginTop: '15px',
  background: theme.customGradient,
  borderRadius: '10px',
  lineHeight: '200%',
  '&:hover': {
    background: theme.action.hover,
    borderRadius: '5px',
    lineHeight: '200%',
  },
  '&:active': {
    background: theme.action.active,
    borderRadius: '5px',
    lineHeight: '200%',
  },
}));
