import { useState } from 'react';

// Formik + Yup
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  TextField,
  IconButton,
  InputAdornment,
  Divider,
  Typography,
  Box,
  Button,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InterFont, InterTypography, LabelTypography } from '@/ui/font';
import { SignInButton } from '@/ui/button';
import { useTheme } from 'next-themes';
import axios from 'axios';
import { CustomTextField } from '@/ui/TextField';
const SignInForm = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('Full Name is required')
        .matches(/^[a-zA-Z0-9]*$/, 'Only letters and numbers are allowed'),
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().min(8).max(255).required('Password is required'),
    }),

    onSubmit: async (values, helpers) => {
      setSuccess('');
      setError('');
      try {
        const response = await axios({
          url: `https://rakbanktest.free.beeceptor.com`,
          method: 'POST',
          data: JSON.stringify(values), // Send the form values in the request
          validateStatus: function (status) {
            return status >= 200 && status < 599;
          },
        });

        if (response.status === 200) {
          setSuccess('Success Logging In');
          helpers.resetForm();
        } else {
          helpers.setFieldError('submit', 'Submission failed');
        }
      } catch (error) {
        // Handle Axios or network errors
        console.error(error);
        helpers.setFieldError('submit', 'Submission failed');
      }
    },
  });

  const inputStyle = {
    backgroundColor: theme === 'dark' ? '#848884' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
  };

  const dividerStyles = {
    borderWidth: '1px',
    backgroundColor: theme === 'dark' ? '#848884' : '#D3D3D3',
    my: '20px',
    borderColor: 'transparent',
    mx: '30px',
  };

  return (
    <>
      <Divider
        sx={{
          ...dividerStyles,
        }}
      />
      <Box sx={{ p: '15px' }}>
        <InterTypography
          variant="h4"
          sx={{ color: theme === 'dark' ? 'white' : 'grey' }}
        >
          Sign in to Travelguru{' '}
        </InterTypography>
        <LabelTypography variant="h6">
          Dont have an account?{' '}
          <Button variant="text" sx={{ color: '#F76857' }}>
            Sign Up
          </Button>
        </LabelTypography>
      </Box>
      <Divider
        sx={{
          ...dividerStyles,
        }}
      />
      <Box sx={{ px: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
            fullWidth
            helperText={formik.touched.fullName && formik.errors.fullName}
            label="Full Name"
            name="fullName"
            id="fullName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullName}
            sx={{ ...inputStyle }}
            data-testid="fullName"
            className={isDarkMode ? 'dark-mode' : ''}
          />
          <CustomTextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            sx={{ ...inputStyle }}
            data-testid="email"
            className={isDarkMode ? 'dark-mode' : ''}
          />
          <CustomTextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ ...inputStyle }}
            data-testid="password"
            className={isDarkMode ? 'dark-mode' : ''}
          />
          <SignInButton
            disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            id="btnSubmit"
            data-testid="btnSubmit"
          >
            Continue
          </SignInButton>
          <Typography
            data-testid="success"
            sx={{ textAlign: 'center', m: '5px' }}
          >
            {success}
          </Typography>
          <Typography
            data-testid="error"
            sx={{ textAlign: 'center', m: '5px' }}
          >
            {error}
          </Typography>
        </form>
      </Box>
      <Divider
        sx={{
          ...dividerStyles,
        }}
      />{' '}
    </>
  );
};

export default SignInForm;
