import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { deleteExpenses } from '../redux/actions';

class Table extends Component {
  handelClick = (id) => {
    const { deleteExpense, expense } = this.props;
    deleteExpense(expense, id);
  };

  render() {
    const { expense } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tbody>
          {expense.map((element) => {
            const { id, description, tag, method, value,
              exchangeRates, currency } = element;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                <td>BRL</td>
                <td>
                  <Button
                    onClick={ () => this.handelClick(id) }
                    name="Excluir"
                    data="delete-btn"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expense: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (prevExpense, id) => dispatch(deleteExpenses(prevExpense, id)),
});

Table.propTypes = {
  expense: PropTypes.arrayOf.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
