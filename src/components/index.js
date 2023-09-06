import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import LeftImageSection from './LeftImageSection';
import CustomizedSwitches from './ThemeSwitch';
import RegistrationForm from './SignInForm';
import SocialMediaIcons from './SocialMediaIcons';
import { StyledInterTypography } from '@/ui/font';
import { RightGrid, StyledContainer } from '@/ui/grid';
import { CustomCard } from '@/ui/card';
import { StyledCheckCircleIcon } from '@/ui/icon';

const BasicCard = () => {
  return (
    <CustomCard>
      <CardContent>
        <Grid container justifyContent={'space-between'} spacing={4}>
          <Grid item md={6} xs={12} sm={12} className="imageGrid">
            <LeftImageSection />
          </Grid>
          <RightGrid item md={6} xs={12} sm={12} className="rightGrid">
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
          </RightGrid>
        </Grid>
      </CardContent>
    </CustomCard>
  );
};
export default BasicCard;
