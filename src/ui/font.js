import { Inter } from 'next/font/google';
import { Typography, styled } from '@mui/material';
import { useTheme } from 'next-themes';

export const InterFont = Inter({
  subsets: ['latin'],
  weight: ['800'],
  style: 'normal',
  preload: true,
  adjustFontFallback: true,
});

export const InterTypography = styled(Typography)({
  fontFamily: 'var(--primary-font)',
  fontWeight: `${InterFont.style.fontWeight}`,
  marginLeft: '20px',
});

export const StyledInterTypography = styled(InterTypography)`
  color: #f76857;
  display: flex;
  align-items: center;
`;

export const LabelTypography = styled(Typography)({
  lineHeight: '50px',
  color: 'grey',
  marginLeft: '20px',
});
