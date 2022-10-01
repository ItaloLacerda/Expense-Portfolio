import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalField = () => {
    const { expense } = this.props;

    let sum = 0;
    const values = expense.map((element) => {
      const { value, exchangeRates, currency } = element;
      const { ask } = exchangeRates[currency];
      const VALUE = Number(value) * Number(ask);

      return VALUE;
    });
    values.forEach((element) => {
      sum += element;
    });
    return parseFloat(sum.toFixed(2)) || (0).toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{ `Email: ${email}` }</h4>
        <h4 data-testid="total-field">{this.totalField()}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expense: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(Header);
