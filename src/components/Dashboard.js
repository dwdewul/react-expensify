import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const Dashboard = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default Dashboard;