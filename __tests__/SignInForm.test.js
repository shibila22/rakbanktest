import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import SignInForm from '@/components/SignInForm';
import userEvent from '@testing-library/user-event';

describe('SignIn Form Section ', () => {
  describe('Labels', () => {
    it('should have Sign in text', () => {
      render(<SignInForm />);
      expect(screen.getByText('Sign in to Travelguru')).toBeInTheDocument();
    });

    it('should have a label text', () => {
      render(<SignInForm />);
      expect(screen.getByText('Dont have an account?')).toBeInTheDocument();
    });
    it('should have a button with text "Sign Up"', () => {
      render(<SignInForm />);
      expect(
        screen.getByRole('button', { name: 'Sign Up' })
      ).toBeInTheDocument();
    });
  });

  describe('SignInForm', () => {
    it('should enter signin credentials and click on Continue button', async () => {
      render(<SignInForm />);
      await userEvent.type(screen.getByLabelText(/Full Name/), 'anson');
      await userEvent.type(screen.getByLabelText(/Email/), 'anson@gmail.com');
      await userEvent.type(screen.getByLabelText(/Password/), 'peaceout');
      const loginButton = screen.getByTestId('btnSubmit');
      await userEvent.click(loginButton);
      await waitFor(() => {
        expect(screen.getByTestId('success')).toBeInTheDocument();
      });
    });
    it('should display error message', async () => {
      render(<SignInForm />);
      await userEvent.type(screen.getByLabelText(/Full Name/), 'anson');
      await userEvent.type(screen.getByLabelText(/Email/), 'anson@gmail.com');
      await userEvent.type(screen.getByLabelText(/Password/), 'peace');
      const loginButton = screen.getByTestId('btnSubmit');
      await userEvent.click(loginButton);
      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument();
      });
    });
    it('should render the  input field correctly', () => {
      render(<SignInForm />);
      const fullNameInput = screen.getByLabelText(/Full Name/i);
      expect(fullNameInput).toBeInTheDocument();
      expect(fullNameInput).toHaveAttribute('type', 'text');
      const emailInput = screen.getByLabelText(/Email/i);

      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'email');
      const passwordInput = screen.getByLabelText(/Password/);
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('should display an error for an invalid email format', async () => {
      render(<SignInForm />);

      const emailInput = screen.getByLabelText(/Email/i);
      const submitButton = screen.getByTestId('btnSubmit');

      // Enter an invalid email address (missing "@" symbol).
      await userEvent.type(emailInput, 'invalid-email');
      await userEvent.click(submitButton);

      // Assert that an error message related to the email field is displayed.
      const emailError = screen.getByText(/Must be a valid email/i);
      expect(emailError).toBeInTheDocument();
    });
    it('should display an error for a weak password', async () => {
      render(<SignInForm />);

      const passwordInput = screen.getByLabelText(/Password/);
      const submitButton = screen.getByTestId('btnSubmit');

      // Enter a weak password (e.g., less than 6 characters).
      await userEvent.type(passwordInput, 'weak');
      await userEvent.click(submitButton);

      // Assert that an error message related to the password field is displayed.
      const passwordError = screen.getByText(
        /password must be at least 8 characters/i
      );
      expect(passwordError).toBeInTheDocument();
    });
  });
});
