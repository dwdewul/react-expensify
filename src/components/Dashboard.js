import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default Dashboard;