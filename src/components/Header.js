import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, idToEdit } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{ `Email: ${email}` }</h4>
        <h4 data-testid="total-field">{ `Despesa Total: ${idToEdit.toFixed(2)}` }</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  idToEdit: wallet.idToEdit,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  idToEdit: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
