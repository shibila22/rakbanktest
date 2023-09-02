import { Typography, Box, Grid } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { SocialMediaIconBox } from '@/ui/box';

const SocialMediaIcons = () => {
  return (
    <>
      <Grid container justifyContent={'center'} sx={{ p: '15px' }}>
        <Grid item>
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'grey' }}>
            OR
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={'center'} sx={{ p: '30px' }}>
        <Grid item xs={12} sm={8} md={8}>
          <SocialMediaIconBox>
            <GoogleIcon sx={{ mr: '15px' }} />
            <Typography>Sign in with google</Typography>
          </SocialMediaIconBox>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <SocialMediaIconBox>
            <FacebookIcon />
          </SocialMediaIconBox>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <SocialMediaIconBox>
            <AppleIcon />
          </SocialMediaIconBox>
        </Grid>
      </Grid>
    </>
  );
};
export default SocialMediaIcons;
