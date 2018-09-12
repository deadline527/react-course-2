import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import getTotalExpenses from '../selectors/expenses-total'
import expenses from '../tests/fixtures/expenses'
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashBoardPage = () => (
    <div>
      <ExpenseListFilters />
      <ExpensesSummary />
      <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;