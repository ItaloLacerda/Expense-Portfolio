import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockData from './helpers/mockData';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Test wallet page', () => {
  const alimentacao = 'Alimentação';
  const cartaoDeCredito = 'Cartão de crédito';

  it('checks if it is possible to change the value of the inputs and combobox of the wallet page', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(async () => ({
      json: async () => mockData,
    }));

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValue = screen.getByRole('textbox', { name: /value/i });
    const inputDescription = screen.getByRole('textbox', { name: /description/i });
    const selectCurrency = screen.getByRole('combobox', { name: /currency/i });
    const selectMethod = screen.getByRole('combobox', { name: /method/i });
    const selectTag = screen.getByRole('combobox', { name: /tag/i });
    const initialAccumulated = screen.getByRole('heading', { name: /0\.00/i });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
    expect(initialAccumulated).toBeInTheDocument();

    userEvent.type(inputValue, '10');
    expect(inputValue).toHaveValue('10');

    userEvent.type(inputDescription, 'BurgeKing');
    expect(inputDescription).toHaveValue('BurgeKing');

    await waitFor(() => {
      expect(selectCurrency).toHaveValue('USD');
      userEvent.selectOptions(selectCurrency, 'EUR');
      expect(selectCurrency).toHaveValue('EUR');
    });

    expect(selectMethod).toHaveValue('Dinheiro');
    userEvent.selectOptions(selectMethod, 'Cartão de débito');
    expect(selectMethod).toHaveValue('Cartão de débito');

    expect(selectTag).toHaveValue(alimentacao);
    userEvent.selectOptions(selectTag, 'Lazer');
    expect(selectTag).toHaveValue('Lazer');
  });

  it('check if it is possible to add expense', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(async () => ({
      json: async () => mockData,
    }));

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValue = screen.getByRole('textbox', { name: /value/i });
    const inputDescription = screen.getByRole('textbox', { name: /description/i });
    const selectCurrency = screen.getByRole('combobox', { name: /currency/i });
    const selectMethod = screen.getByRole('combobox', { name: /method/i });
    const selectTag = screen.getByRole('combobox', { name: /tag/i });
    const addExpenseButton = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
    expect(addExpenseButton).toBeInTheDocument();

    userEvent.type(inputValue, '10');
    expect(inputValue).toHaveValue('10');

    userEvent.type(inputDescription, 'BurgeKing');
    expect(inputDescription).toHaveValue('BurgeKing');

    await waitFor(() => {
      expect(selectCurrency).toHaveValue('USD');
      userEvent.selectOptions(selectCurrency, 'JPY');
      expect(selectCurrency).toHaveValue('JPY');
    });

    expect(selectMethod).toHaveValue('Dinheiro');
    userEvent.selectOptions(selectMethod, cartaoDeCredito);
    expect(selectMethod).toHaveValue(cartaoDeCredito);

    expect(selectTag).toHaveValue(alimentacao);

    userEvent.click(addExpenseButton);

    await waitFor(() => {
      const columnDescriptionRow1 = screen.getByRole('cell', { name: /burgeking/i });
      const columnTagRow1 = screen.getByRole('cell', { name: /alimentação/i });
      const columnMethodRow1 = screen.getByRole('cell', { name: /cartão de crédito/i });
      const columnValueRow1 = screen.getByRole('cell', { name: /10\.00/i });
      const columnCoinRow1 = screen.getByRole('cell', { name: /iene japonês\/real brasileiro/i });
      const columnExchangeUsedRow1 = screen.getByRole('cell', { name: /0\.04/i });
      const columnConvertedValuenRow1 = screen.getByRole('cell', { name: /0\.37/i });
      const columnConversionCurrencyRow1 = screen.getByRole('cell', { name: /brl/i });
      const columnButtonEditRow1 = screen.getByRole('button', { name: /editar/i });
      const columnButtonDeleteRow1 = screen.getByRole('button', { name: /excluir/i });
      const finalAccumulated = screen.getByRole('heading', { name: /0\.37/i });

      expect(columnDescriptionRow1).toBeInTheDocument();
      expect(columnTagRow1).toBeInTheDocument();
      expect(columnMethodRow1).toBeInTheDocument();
      expect(columnValueRow1).toBeInTheDocument();
      expect(columnCoinRow1).toBeInTheDocument();
      expect(columnExchangeUsedRow1).toBeInTheDocument();
      expect(columnConvertedValuenRow1).toBeInTheDocument();
      expect(columnConversionCurrencyRow1).toBeInTheDocument();
      expect(columnButtonEditRow1).toBeInTheDocument();
      expect(columnButtonDeleteRow1).toBeInTheDocument();
      expect(finalAccumulated).toBeInTheDocument();
    });
  });

  it('checks if it is possible to exclude the expense', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(async () => ({
      json: async () => mockData,
    }));

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValue = screen.getByRole('textbox', { name: /value/i });
    const inputDescription = screen.getByRole('textbox', { name: /description/i });
    const selectCurrency = screen.getByRole('combobox', { name: /currency/i });
    const selectMethod = screen.getByRole('combobox', { name: /method/i });
    const selectTag = screen.getByRole('combobox', { name: /tag/i });
    const addExpenseButton = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
    expect(addExpenseButton).toBeInTheDocument();

    userEvent.type(inputValue, '10');
    expect(inputValue).toHaveValue('10');

    userEvent.type(inputDescription, 'BurgeKing');
    expect(inputDescription).toHaveValue('BurgeKing');

    await waitFor(() => {
      expect(selectCurrency).toHaveValue('USD');
      userEvent.selectOptions(selectCurrency, 'ETH');
      expect(selectCurrency).toHaveValue('ETH');
    });

    expect(selectMethod).toHaveValue('Dinheiro');
    userEvent.selectOptions(selectMethod, cartaoDeCredito);
    expect(selectMethod).toHaveValue(cartaoDeCredito);

    expect(selectTag).toHaveValue(alimentacao);

    userEvent.click(addExpenseButton);

    await waitFor(() => {
      const columnDescriptionRow1 = screen.getByRole('cell', { name: /burgeking/i });
      const columnTagRow1 = screen.getByRole('cell', { name: /alimentação/i });
      const columnMethodRow1 = screen.getByRole('cell', { name: /cartão de crédito/i });
      const columnValueRow1 = screen.getByRole('cell', { name: /10\.00/i });
      const columnCoinRow1 = screen.getByRole('cell', { name: /Ethereum\/real brasileiro/i });
      const columnExchangeUsedRow1 = screen.getByRole('cell', { name: /9\.26/i });
      const columnConvertedValuenRow1 = screen.getByRole('cell', { name: /92\.62/i });
      const columnConversionCurrencyRow1 = screen.getByRole('cell', { name: /brl/i });
      const columnButtonEditRow1 = screen.getByRole('button', { name: /editar/i });
      const columnButtonDeleteRow1 = screen.getByRole('button', { name: /excluir/i });

      userEvent.click(columnButtonDeleteRow1);

      expect(columnDescriptionRow1).not.toBeInTheDocument();
      expect(columnTagRow1).not.toBeInTheDocument();
      expect(columnMethodRow1).not.toBeInTheDocument();
      expect(columnValueRow1).not.toBeInTheDocument();
      expect(columnCoinRow1).not.toBeInTheDocument();
      expect(columnExchangeUsedRow1).not.toBeInTheDocument();
      expect(columnConvertedValuenRow1).not.toBeInTheDocument();
      expect(columnConversionCurrencyRow1).not.toBeInTheDocument();
      expect(columnButtonEditRow1).not.toBeInTheDocument();
      expect(columnButtonDeleteRow1).not.toBeInTheDocument();
    });
  });
  it('check if it is possible to edit the expense', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(async () => ({
      json: async () => mockData,
    }));

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValue = screen.getByRole('textbox', { name: /value/i });
    const inputDescription = screen.getByRole('textbox', { name: /description/i });
    const selectCurrency = screen.getByRole('combobox', { name: /currency/i });
    const selectMethod = screen.getByRole('combobox', { name: /method/i });
    const selectTag = screen.getByRole('combobox', { name: /tag/i });
    const addExpenseButton = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
    expect(addExpenseButton).toBeInTheDocument();

    userEvent.type(inputValue, '10');
    expect(inputValue).toHaveValue('10');

    userEvent.type(inputDescription, 'BurgeKing');
    expect(inputDescription).toHaveValue('BurgeKing');

    await waitFor(() => {
      expect(selectCurrency).toHaveValue('USD');
      userEvent.selectOptions(selectCurrency, 'XRP');
      expect(selectCurrency).toHaveValue('XRP');
    });

    expect(selectMethod).toHaveValue('Dinheiro');
    userEvent.selectOptions(selectMethod, cartaoDeCredito);
    expect(selectMethod).toHaveValue(cartaoDeCredito);

    expect(selectTag).toHaveValue(alimentacao);

    userEvent.click(addExpenseButton);

    await waitFor(() => {
      let columnDescriptionRow1 = screen.getByRole('cell', { name: /burgeking/i });
      const columnTagRow1 = screen.getByRole('cell', { name: /alimentação/i });
      const columnMethodRow1 = screen.getByRole('cell', { name: /cartão de crédito/i });
      const columnValueRow1 = screen.getByRole('cell', { name: /10\.00/i });
      const columnCoinRow1 = screen.getByRole('cell', { name: /XRP\/real brasileiro/i });
      const columnExchangeUsedRow1 = screen.getByRole('cell', { name: /1\.93/i });
      const columnConvertedValuenRow1 = screen.getByRole('cell', { name: /19\.30/i });
      const columnConversionCurrencyRow1 = screen.getByRole('cell', { name: /brl/i });
      const columnButtonEditRow1 = screen.getByTestId('edit-btn');
      const columnButtonDeleteRow1 = screen.getByRole('button', { name: /excluir/i });

      expect(columnDescriptionRow1).toBeInTheDocument();
      userEvent.click(columnButtonEditRow1);
      userEvent.type(inputDescription, 'Subway');

      const editButton = screen.getByRole('button', { name: /editar despesa/i });
      expect(editButton).toBeInTheDocument();
      userEvent.click(editButton);

      columnDescriptionRow1 = screen.getByRole('cell', { name: /subway/i });
      expect(columnDescriptionRow1).toBeInTheDocument();
      expect(columnTagRow1).toBeInTheDocument();
      expect(columnMethodRow1).toBeInTheDocument();
      expect(columnValueRow1).toBeInTheDocument();
      expect(columnCoinRow1).toBeInTheDocument();
      expect(columnExchangeUsedRow1).toBeInTheDocument();
      expect(columnConvertedValuenRow1).toBeInTheDocument();
      expect(columnConversionCurrencyRow1).toBeInTheDocument();
      expect(columnButtonEditRow1).toBeInTheDocument();
      expect(columnButtonDeleteRow1).toBeInTheDocument();
    });
  });
});
