import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchAPI from '../API/fetchAPI';

import ComboBox from './ComboBox';
import Input from './Input';
import Button from './Button';
import { addExpenses } from '../redux/actions';

const alimentacao = 'Alimentação';

class WalletForm extends Component {
  state = {
    count: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: alimentacao,
    description: '',
  };

  handelChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  setStateFunction = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      description: '',
    }));
  };

  handelClick = async () => {
    const { addExpense } = this.props;
    const { value, currency, method, tag, description, count } = this.state;
    const fetch = await fetchAPI();
    const exchangeRates = fetch;
    const obj = {
      id: count,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };
    addExpense(obj);
    this.setStateFunction();
  };

  render() {
    const { currencies } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;
    return (
      <from>
        <Input
          data="value-input"
          name="value"
          type="text"
          id="valueId"
          value={ value }
          onChange={ (event) => this.handelChange(event) }
        />
        <Input
          data="description-input"
          name="description"
          type="text"
          id="descriptionId"
          value={ description }
          onChange={ (event) => this.handelChange(event) }
        />
        <ComboBox
          value={ currency }
          data="currency-input"
          currencies={ currencies }
          label="currency"
          name="currency"
          onClick={ (event) => this.handelChange(event) }
        />
        <ComboBox
          value={ method }
          data="method-input"
          currencies={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          label="method"
          name="method"
          onClick={ (event) => this.handelChange(event) }
        />
        <ComboBox
          value={ tag }
          data="tag-input"
          currencies={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          label="tag"
          name="tag"
          onClick={ (event) => this.handelChange(event) }
        />
        <Button name="Adicionar despesa" onClick={ this.handelClick } />
      </from>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (epxense) => dispatch(addExpenses(epxense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
  addExpense: PropTypes.func.isRequired,
  expenseInformation: PropTypes.shape({
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
