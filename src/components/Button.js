import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { disabled, onClick, name } = this.props;
    return (
      <button type="submit" disabled={ disabled } onClick={ onClick }>{name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
