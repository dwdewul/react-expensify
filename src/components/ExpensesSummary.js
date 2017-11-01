import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expensesSelectors';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount !== 1 ? 'expenses' : 'expense';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);