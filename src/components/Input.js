import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginValidationAction, walletFormAction } from '../redux/actions';

class Input extends Component {
  // handelChange = ({ target }, func) => {
  //   const { longinGlobal, type, name, walletFormDispatch } = this.props;
  //   this.setState({
  //     [name]: target.value,
  //   }, async () => {
  //     const { value } = this.state;
  //     if (type === 'email' || type === 'password') {
  //       await longinGlobal(type, value);
  //       func();
  //     }
  //     if (name === 'value' || name === 'description') {
  //       await walletFormDispatch(name, value);
  //     }
  //   });
  // };

  render() {
    const { type, id, name, data, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        <h4>{name}</h4>
        <input
          id={ id }
          type={ type }
          onChange={ onChange }
          value={ value }
          data-testid={ data }
          name={ name }
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  longinGlobal: (type, value) => dispatch(loginValidationAction(type, value)),
  walletFormDispatch: (type, value) => dispatch(walletFormAction(type, value)),
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Input);
