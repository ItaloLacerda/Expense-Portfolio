import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import { currenciesAction, fetchCoins } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  render() {
    return (
      <>
        <Header />
        <WalletForm />
        <Table />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchCoins(currenciesAction)),
});

Wallet.propTypes = {
  fetchCoin: PropTypes.arrayOf.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
