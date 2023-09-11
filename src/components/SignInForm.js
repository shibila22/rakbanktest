import { useState } from 'react';

// Formik + Yup
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { IconButton, InputAdornment, Box, TextField } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { LabelTypography, PoppinsTypography } from '@/ui/font';
import { SignInButton, SignUpButton } from '@/ui/button';
import { CustomDivider } from '@/ui/divider';
import { CommonTypography } from '@/ui/font';
import { loginApi } from '@/pages/__fake__api/index';

const SignInForm = () => {
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
        const response = await loginApi.SignIn(values);
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

  return (
    <>
      <CustomDivider />
      <Box sx={{ p: '15px' }}>
        <PoppinsTypography variant="h3">
          Sign in to Travelguru{' '}
        </PoppinsTypography>
        <LabelTypography variant="h6">
          Dont have an account?{' '}
          <SignUpButton variant="text">Sign up</SignUpButton>
        </LabelTypography>
      </Box>
      <CustomDivider />
      <Box sx={{ px: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
            fullWidth
            helperText={formik.touched.fullName && formik.errors.fullName}
            // label="Full Name"
            name="fullName"
            type="text"
            id="fullName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullName}
            data-testid="fullName"
            placeholder="Full Name"
            variant="filled"
            InputProps={{
              style: {
                borderRadius: '10px',
              },
            }}
          />
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            // label="Email Address"
            id="email"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            data-testid="email"
            placeholder="Email"
            variant="filled"
            InputProps={{
              style: {
                borderRadius: '10px',
              },
            }}
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            // label="Password"
            margin="normal"
            name="password"
            id="password"
            placeholder="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            InputProps={{
              style: {
                borderRadius: '10px',
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon data-testid="visibilityIcon" />
                    ) : (
                      <VisibilityOffOutlinedIcon data-testid="visibilityIcon" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            data-testid="password"
            variant="filled"
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
          <CommonTypography data-testid="success">{success}</CommonTypography>
          <CommonTypography data-testid="error">{error}</CommonTypography>
        </form>
      </Box>
      <CustomDivider />
    </>
  );
};

export default SignInForm;
