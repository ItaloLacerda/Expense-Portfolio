import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ComboBox from './ComboBox';
import Input from './Input';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <from>
        <Input data="value-input" name="Valor" type="text" id="valueId" />
        <Input data="description-input" name="Descrição" type="text" id="descriptionId" />
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
      </from>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
