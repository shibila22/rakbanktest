import { Grid } from '@mui/material';
import { SocialMediaIconBox } from '@/ui/box';
import { CommonTypography, IconTypography, PoppinsTypography } from '@/ui/font';
import Image from 'next/image';

const SocialMediaIcons = () => {
  return (
    <>
      <Grid container justifyContent={'center'} sx={{ p: '15px' }}>
        <Grid item>
          <CommonTypography>-OR-</CommonTypography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={'center'} sx={{ p: '20px' }}>
        <Grid item xs={12} sm={8} md={8}>
          <SocialMediaIconBox>
            <Image
              src="/icons/google.png"
              alt="google"
              width={20}
              height={20}
              data-testid="google-img"
            />
            <IconTypography>Sign in with google</IconTypography>
          </SocialMediaIconBox>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <SocialMediaIconBox>
            <Image
              src="/icons/facebook.png"
              alt="facebook"
              width={20}
              height={23}
              data-testid="facebook-img"
            />{' '}
          </SocialMediaIconBox>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <SocialMediaIconBox>
            <Image
              src="/icons/apple-logo.png"
              alt="apple"
              width={20}
              height={23}
              data-testid="apple-img"
            />{' '}
          </SocialMediaIconBox>
        </Grid>
      </Grid>
    </>
  );
};
export default SocialMediaIcons;
