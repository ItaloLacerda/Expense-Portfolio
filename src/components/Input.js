import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginValidationAction } from '../redux/actions';

class Input extends Component {
  state = {
    value: '',
  };

  handelChange = ({ target }, func) => {
    const { longinGlobal, type } = this.props;
    this.setState({
      value: target.value,
    }, async () => {
      const { value } = this.state;
      await longinGlobal(type, value);
      func();
    });
  };

  render() {
    const { type, id, name, data, func } = this.props;
    const { value } = this.state;
    return (
      <label htmlFor={ id }>
        <h4>{name}</h4>
        <input
          id={ id }
          type={ type }
          onChange={ (event) => this.handelChange(event, func) }
          value={ value }
          data-testid={ data }
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  longinGlobal: (type, value) => dispatch(loginValidationAction(type, value)),
});

Input.propTypes = {
  longinGlobal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Input);
