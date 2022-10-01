import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
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

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
