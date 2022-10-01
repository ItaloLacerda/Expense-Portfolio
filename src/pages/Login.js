import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Input from '../components/Input';

import { loginValidationAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    buttonDisabled: true,
    email: '',
    password: '',
  };

  loginValidation = () => {
    const { buttonDisabled, email, password } = this.state;
    console.log(email);
    console.log(password);
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

  handelChange = ({ target }) => {
    const { value, name } = target;
    const { longinGlobal } = this.props;
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'email' || name === 'password') {
        const { email } = this.state;
        longinGlobal(email);
        this.loginValidation();
      }
      if (name === 'value' || name === 'description') {
        walletFormDispatch(name, value);
      }
    });
  };

  handelClick = (event) => {
    const { history } = this.props;
    event.preventDefault();
    history.push('/carteira');
  };

  render() {
    const { buttonDisabled, email, password } = this.state;
    return (
      <>
        <div>Login</div>
        <form>
          <Input
            type="email"
            id="email"
            name="email"
            data="email-input"
            func={ this.loginValidation }
            value={ email }
            onChange={ (event) => this.handelChange(event) }
          />
          <Input
            type="password"
            id="password"
            name="password"
            data="password-input"
            func={ this.loginValidation }
            value={ password }
            onChange={ (event) => this.handelChange(event) }
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

const mapDispatchToProps = (dispatch) => ({
  longinGlobal: (type, value) => dispatch(loginValidationAction(type, value)),
});

Login.propTypes = {
  longinGlobal: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
