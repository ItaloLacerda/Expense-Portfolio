import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ComboBox from './ComboBox';
import Input from './Input';
import Button from './Button';
import { addExpenses, fetchCoins } from '../redux/actions';

class WalletForm extends Component {
  state = {
    count: 0,
  };

  handelClick = () => {
    const { addExpense } = this.props;
    const { count } = this.state;
    const obj = {
      id: count,
      value: 'teste',
      currency: 'teste',
      method: 'teste',
      tag: 'teste',
      description: 'teste',
      exchangeRates: 'teste',
    };
    addExpense(obj);
    this.setState((previousState) => ({ count: previousState.count + 1 }));
  };

  render() {
    const { currencies } = this.props;
    return (
      <from>
        <Input data="value-input" name="value" type="text" id="valueId" />
        <Input
          data="description-input"
          name="description"
          type="text"
          id="descriptionId"
        />
        <ComboBox data="currency-input" currencies={ currencies } label="Moeda" />
        <ComboBox
          data="method-input"
          currencies={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          label="Metodo de pagamento"
        />
        <ComboBox
          data="tag-input"
          currencies={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          label="Tag"
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
  addExpense: (epxense) => dispatch(fetchCoins(addExpenses, epxense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
