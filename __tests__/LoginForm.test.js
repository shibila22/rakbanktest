import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/SignInForm';
import userEvent from '@testing-library/user-event';

describe('Login Form Section ', () => {
  describe('Labels', () => {
    it('should have Sign in text', () => {
      render(<LoginForm />);
      expect(screen.getByText('Sign in to Travelguru')).toBeInTheDocument();
    });

    it('should have a label text', () => {
      render(<LoginForm />);
      expect(screen.getByText('Dont have an account?')).toBeInTheDocument();
    });
  });

  describe('LoginForm', () => {
    it('should enter username and password and click on Continue button', async () => {
      render(<LoginForm />);
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
      render(<LoginForm />);
      await userEvent.type(screen.getByLabelText(/Full Name/), 'anson');
      await userEvent.type(screen.getByLabelText(/Email/), 'anson@gmail.com');
      await userEvent.type(screen.getByLabelText(/Password/), 'peace');
      const loginButton = screen.getByTestId('btnSubmit');
      await userEvent.click(loginButton);
      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument();
      });
    });
  });
});
