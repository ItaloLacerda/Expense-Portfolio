import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComboBox extends Component {
  render() {
    const { currencies, data, label } = this.props;
    return (
      <>
        <label htmlFor={ data }>{ label }</label>
        <select id={ data } data-testid={ data }>
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
  currencies: PropTypes.arrayOf.isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ComboBox;
