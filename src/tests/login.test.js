import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Test login page', () => {
  const emailInput = 'email-input';
  const passwordInput = 'password-input';

  it('checks if there is a login text', () => {
    renderWithRouterAndRedux(<App />);

    const loginText = screen.getByText(/login/i);
    expect(loginText).toBeInTheDocument();
  });

  it('checks if there is an email and password input on the screen', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(emailInput);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId(passwordInput);
    expect(inputPassword).toBeInTheDocument();
  });

  it('checks if the logs in and is redirected to the wallet page', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = 'test@test.com';
    const password = '123456';

    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(button);

    expect(button).not.toBeDisabled();
    expect(history.location.pathname).toBe('/carteira');
  });

  it('test if the button is disabled when there is no @ or .com', () => {
    renderWithRouterAndRedux(<App />);
    const email1 = 'testtest.com';
    const email2 = 'test@test';
    const email3 = 'testtest';
    const email = 'test@test.com';
    const password = '123456';
    const password1 = '12345';

    const inputEmail = screen.getByTestId(emailInput);
    const inputPassword = screen.getByTestId(passwordInput);
    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);

    expect(button).not.toBeDisabled();

    userEvent.type(inputEmail, email1);
    userEvent.type(inputPassword, password);

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, email2);
    userEvent.type(inputPassword, password);

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, email3);
    userEvent.type(inputPassword, password);

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password1);

    expect(button).toBeDisabled();
  });
});
