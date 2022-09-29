import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  state = {
    buttonDisabled: true,
  };

  loginValidation = () => {
    const { buttonDisabled } = this.state;
    const { email, password } = this.props;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[com]+(\.[br]+)?$/i;
    const passwordLength = 6;
    const validLogin = emailRegex.test(email) && password.length >= passwordLength;
    const invalidLogin = password.length < passwordLength || !emailRegex.test(email);

    if (validLogin) {
      this.setState({ buttonDisabled: false });
    }

    if (buttonDisabled === false && invalidLogin) {
      this.setState({ buttonDisabled: true });
    }
  };

  handelClick = (event) => {
    const { history } = this.props;
    event.preventDefault();
    history.push('/carteira');
  };

  render() {
    const { buttonDisabled } = this.state;
    return (
      <>
        <div>Login</div>
        <form>
          <Input
            type="email"
            id="email"
            name="Email"
            data="email-input"
            func={ this.loginValidation }
          />
          <Input
            type="password"
            id="password"
            name="Password"
            data="password-input"
            func={ this.loginValidation }
          />
          <Button
            disabled={ buttonDisabled }
            name="Entrar"
            onClick={ this.handelClick }
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
  password: user.password,
});

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps)(Login);
