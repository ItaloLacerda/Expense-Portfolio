import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletFormAction } from '../redux/actions';

class ComboBox extends Component {
  handelClick = ({ target }) => {
    const { value } = target;
    const { walletFormDispatch, label } = this.props;
    walletFormDispatch(label, value);
  };

  render() {
    const { currencies, data, label } = this.props;
    return (
      <>
        <label htmlFor={ data }>{ label }</label>
        <select id={ data } data-testid={ data } onClick={ this.handelClick }>
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

const mapDispatchToProps = (dispatch) => ({
  walletFormDispatch: (type, value) => dispatch(walletFormAction(type, value)),
});

ComboBox.propTypes = {
  walletFormDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(ComboBox);
