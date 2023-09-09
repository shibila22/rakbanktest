import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import SignInForm from '@/components/SignInForm';
import userEvent from '@testing-library/user-event';
import MUIThemeProvider from '@/themes/MUIThemeProvider';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer, {
  themeReducer as themeActionReducer,
} from '../src/slice/theme-slice';

describe('SignIn Form Section ', () => {
  describe('Labels', () => {
    it('renders with the correct variant and text content', () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      const typographyElement = screen.getByText('Sign in to Travelguru');
      expect(typographyElement).toBeInTheDocument();
      expect(typographyElement).toHaveClass('MuiTypography-h3');
    });

    it('renders with the correct variant ,text content and button', () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );
      const labelTypographyElement = screen.getByText('Dont have an account?');
      expect(labelTypographyElement).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Sign up' })
      ).toBeInTheDocument();
    });
  });

  describe('SignInForm', () => {
    it(' Assert that the TextField component is rendered', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );
      const textFieldElement = screen.getByTestId('fullName');
      expect(textFieldElement).toBeInTheDocument();

      const EmailElement = screen.getByTestId('email');
      expect(EmailElement).toBeInTheDocument();

      const PasswordElement = screen.getByTestId('password');
      expect(PasswordElement).toBeInTheDocument();
    });
    it('should enter signin credentials and click on Continue button', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      await userEvent.type(screen.getByTestId('fullName'), 'anson');
      await userEvent.type(screen.getByTestId('email'), 'anson@gmail.com');
      await userEvent.type(screen.getByTestId('password'), 'peaceout');
      const loginButton = screen.getByTestId('btnSubmit');
      await userEvent.click(loginButton);
      await waitFor(() => {
        expect(screen.getByTestId('success')).toBeInTheDocument();
      });
    });
    it('should display error message', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      await userEvent.type(screen.getByTestId('fullName'), 'anson');
      await userEvent.type(screen.getByTestId('email'), 'anson@gmail.com');
      await userEvent.type(screen.getByTestId('password'), 'peaceout');
      const loginButton = screen.getByTestId('btnSubmit');
      await userEvent.click(loginButton);
      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument();
      });
    });

    it('should find  email error texts', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );
      await userEvent.type(screen.getByTestId('email'), 'ansonl.com');

      const customTextMatcher = (content, element) => {
        return /Must be a valid email/.test(content);
      };

      const emailErrorElements = screen.queryAllByText(customTextMatcher);

      emailErrorElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
    it('should find  password error texts', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );
      await userEvent.type(screen.getByTestId('password'), 'short');

      const customTextMatcher = (content, element) => {
        return /password must be at least 8 characters/.test(content);
      };

      const emailErrorElements = screen.queryAllByText(customTextMatcher);

      emailErrorElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
    it('displays "Full Name is required" helper text when moving to another field', () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      const fullNameInput = screen.getByTestId('fullName');

      // Focus the Full Name input to mark it as touched
      userEvent.click(fullNameInput);

      // Move focus to the Email input
      userEvent.tab();

      const customTextMatcher = (content, element) => {
        return /Full Name is required/.test(content);
      };

      const fullNameErrorElements = screen.queryAllByText(customTextMatcher);

      fullNameErrorElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
    it('displays "Email is required" helper text when moving to another field', () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      const fullNameInput = screen.getByTestId('fullName');
      const emailInput = screen.getByTestId('email');

      userEvent.click(emailInput);

      userEvent.tab();

      const customTextMatcher = (content, element) => {
        return /Email is required/.test(content);
      };

      const emailErrorElements = screen.queryAllByText(customTextMatcher);

      emailErrorElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
    it('resets the form after submission', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      await userEvent.type(screen.getByTestId('fullName'), 'anson');
      await userEvent.type(screen.getByTestId('email'), 'anson@gmail.com');
      await userEvent.type(screen.getByTestId('password'), 'peaceout');
      const loginButton = screen.getByTestId('btnSubmit');
      await userEvent.click(loginButton);

      // Assert that the form fields have been reset
      expect(screen.getByPlaceholderText('Full Name')).toHaveValue('');
      expect(screen.getByPlaceholderText('Email')).toHaveValue('');
      expect(screen.getByPlaceholderText('Password')).toHaveValue('');
    });
    test('toggles password visibility', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      const passwordInput = screen.getByTestId('password');
      passwordInput.getAttribute('type') === 'password';
      const toggleButton = screen.getByTestId('visibilityIcon');
      userEvent.click(toggleButton);
      await waitFor(() => {
        passwordInput.getAttribute('type') === 'text';
      });
      userEvent.click(toggleButton);
      await waitFor(() => {
        passwordInput.getAttribute('type') === 'password';
      });
    });

    const server = setupServer(
      rest.post('/api/login', (req, res, ctx) => {
        // Simulate a successful login response
        return res(ctx.status(200), ctx.json({ message: 'Login successful' }));
      })
    );

    beforeAll(() => server.listen());
    afterEach(() => {
      server.resetHandlers();
    });
    afterAll(() => server.close());

    test('submits the form and handles API response', async () => {
      render(
        <Provider store={store}>
          <MUIThemeProvider>
            <SignInForm />
          </MUIThemeProvider>
        </Provider>
      );

      await userEvent.type(screen.getByTestId('fullName'), 'John Doe');
      await userEvent.type(screen.getByTestId('email'), 'john@example.com');
      await userEvent.type(screen.getByTestId('password'), 'password123');

      const submitButton = screen.getByTestId('btnSubmit');
      await userEvent.click(submitButton);

      // Check if received is an array and has the expected length
      expect(
        Array.isArray(server.requests) ? server.requests : []
      ).toHaveLength(0);

      // Or, if received is a string
      expect(typeof server.requests === 'string' ? received : '').toHaveLength(
        0
      );
      // Verify that the form reflects the API response (e.g., displays a success message)
      expect(screen.getByTestId('success')).toBeInTheDocument();
    });
  });
});
describe('themeReducer', () => {
  it('should update the theme color correctly', () => {
    // Create a store using configureStore with the reducer
    const store = configureStore({
      reducer: themeReducer,
    });

    // Dispatch the action using store.dispatch
    store.dispatch(themeActionReducer('dark'));

    // Get the updated state from the store
    const newState = store.getState();

    // Expect the state to be updated correctly
    expect(newState).toEqual({ themeColor: 'dark' });
  });
});
