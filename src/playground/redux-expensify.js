import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// const addExpense = (
//     { 
//         description = '', 
//         note = '', amount = 0, 
//         createdAt = 0 
//     } = {}) => {
//     return {
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description,
//             note,
//             amount,
//             createdAt
//         }
//     };
// };

// const removeExpense = ({ id } = {}) => {
//     return {
//         type: 'REMOVE_EXPENSE',
//         id
//     };
// };

// const editExpense = (id, updates) => {
//     return {
//         type: 'EDIT_EXPENSE',
//         id,
//         updates
//     };
// };

// const expensesReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [...state, action.expense];
//         case 'REMOVE_EXPENSE':
//             return state.filter(({ id }) => {
//                 return id !== action.id;
//             });
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if(expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     };
//                 } else {
//                     return expense;
//                 }
//             });
//         default:
//             return state;
//     }
// };

// const setTextFilter = (text = '') => {
//     return {
//         type: 'SET_TEXT_FILTER',
//         text
//     };
// };

// const sortByAmount = () => {
//     return {
//         type: 'SORT_BY_AMOUNT'
//     };
// }

// const sortByDate = () => {
//     return {
//         type: 'SORT_BY_DATE'
//     };
// }

// const setEndDate = (endDate) => {
//     return {
//         type: 'SET_END_DATE',
//         endDate
//     };
// };

// const setStartDate = (startDate) => {
//     return {
//         type: 'SET_START_DATE',
//         startDate
//     };
// };

// const filtersReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// }

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             };
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             };
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             };
//         default:
//             return state;
//     }
// };


// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if(sortBy === 'date'){
//             return a.createdAt < b.createdAt ? 1 : -1
//         } else {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };

// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer
//     })
// );

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 10000, createdAt: -1000 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Beer', amount: 300, createdAt: 1000 }));

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// // store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));

// // store.dispatch(setTextFilter('e'));

// store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// // store.dispatch(setEndDate(15));
// // store.dispatch(setStartDate(20));

// const demoState = {
//     expenses: [{
//         id: 'hsdioiekgfmsgfs',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 105000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // Date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };
