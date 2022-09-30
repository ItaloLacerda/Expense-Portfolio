import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchCoins } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
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
  fetchCoins: () => dispatch(fetchCoins()),
});

export default connect(null, mapDispatchToProps)(Wallet);
