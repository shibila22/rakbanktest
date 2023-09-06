import { Typography, styled } from '@mui/material';

export const PoppinsTypography = styled(Typography)(({ theme }) => ({
  marginLeft: '20px',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightBold,
}));

export const LabelTypography = styled(Typography)(({ theme }) => ({
  lineHeight: '50px',
  color: theme.palette.info.main,
  marginLeft: '20px',
}));

export const CommonTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  margin: '5px',
  color: theme.palette.info.main,
}));

export const IconTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: '15px',
}));

export const StyledInterTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: '15px',
}));
