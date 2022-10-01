import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { disabled, onClick, name, data } = this.props;
    return (
      <button
        type="submit"
        disabled={ disabled }
        data-testid={ data }
        onClick={ onClick }
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
