import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchCoins } from '../redux/actions';

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
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  fetchCoin: PropTypes.arrayOf.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
