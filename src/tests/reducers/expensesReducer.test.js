import expenses from '../fixtures';
import moment from 'moment';
import expensesReducers from '../../reducers/expensesReducer';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2],
        expenses[3]
    ]);
});

test('should NOT remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});


test('should add expense', () => {
    const expense = {
        id: '12',
        description: 'Electric',
        amount: 33050,
        note: '',
        createdAt: moment(0).add(7, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toContain(expense);
});

test('should edit expense for ID', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'New one'
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state[2]).toEqual({
        id: '3',
        description: 'New one',
        note: '',
        amount: 1200,
        createdAt: moment(0).add(4, 'days').valueOf()

    });
});

test('should NOT edit expense if ID not found', () => { 
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'New one'
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});