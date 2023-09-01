import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import LeftImageSection from './LeftImageSection';
import CustomizedSwitches from './ThemeSwitch';
import RegistrationForm from './SignInForm';
import SocialMediaIcons from './SocialMediaIcons';
import { useTheme } from 'next-themes';
import { StyledInterTypography } from '@/ui/font';
import { StyledContainer } from '@/ui/grid';
import { CustomCard } from '@/ui/card';
import { StyledCheckCircleIcon } from '@/ui/icon';

const BasicCard = () => {
  const { theme } = useTheme();
  return (
    <CustomCard
      sx={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
      }}
    >
      <CardContent
        sx={{
          p: '0',
          '&:last-child': { paddingBottom: 0 },
        }}
      >
        <Grid container justifyContent={'space-between'} spacing={4}>
          <Grid item md={6} xs={12} sm={12}>
            <LeftImageSection />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <StyledContainer>
              <Grid item>
                {' '}
                <StyledInterTypography>
                  Travelguru <StyledCheckCircleIcon />
                </StyledInterTypography>
              </Grid>
              <Grid item>
                {' '}
                <CustomizedSwitches />
              </Grid>
            </StyledContainer>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <RegistrationForm />
              </Grid>
            </Grid>

            <SocialMediaIcons />
          </Grid>
        </Grid>
      </CardContent>
    </CustomCard>
  );
};
export default BasicCard;
