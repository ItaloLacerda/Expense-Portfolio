import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComboBox extends Component {
  render() {
    const { currencies, data, label, onClick, name, value } = this.props;
    return (
      <>
        <label htmlFor={ data }>{ label }</label>
        <select
          id={ data }
          data-testid={ data }
          onChange={ onClick }
          name={ name }
          value={ value }
        >
          {currencies.map((coins) => (
            <option
              key={ coins }
              value={ coins }
            >
              {coins}
            </option>))}
        </select>
      </>
    );
  }
}

ComboBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ComboBox;
