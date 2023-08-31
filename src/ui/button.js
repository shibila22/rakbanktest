import { Button, styled } from '@mui/material';

export const SignInButton = styled(Button)({
  marginTop: '15px',
  background: 'linear-gradient(129.09deg, #F76857 1.41%, #FE4F4C 98.43%)',
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
  fontFamily: 'Neurial Grotesk',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '200%',
  letterSpacing: '0.05em',
  color: '#FFFFFF',
  '&:hover': {
    background: 'linear-gradient(129.09deg, #F76547 1.41%, #FE4F4C 98.43%)',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    fontFamily: 'Neurial Grotesk',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '200%',
    letterSpacing: '0.05em',
    color: '#FFFFFF',
  },
  '&:active': {
    background: 'linear-gradient(129.09deg, #F76857 1.41%, #FE4F4C 98.43%)',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    fontFamily: 'Neurial Grotesk',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '200%',
    letterSpacing: '0.05em',
    color: '#FFFFFF',
  },
  '&:disabled': {
    background: '#cccccc',
    color: '#666666',
  },
});