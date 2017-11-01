import selectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(199)
});

test('should correctly add up multiple expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(170899)
});