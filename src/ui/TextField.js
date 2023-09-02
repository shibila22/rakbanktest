import { TextField, styled } from '@mui/material';

export const CustomInputField = styled(TextField)({
  borderRadius: '30px',
  fontFamily: 'Neurial Grotesk',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '200%',
  letterSpacing: '0.05em',
});

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '10px',
    },
  },

  // Apply the dark mode styles when the screen size is at least 'md'
  '&.dark-mode': {
    borderRadius: '10px',
  },
}));
