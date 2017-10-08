import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import AddExpensePage from '../components/AddExpense';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';


const AppRouter = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={Dashboard} exact />
                    <Route path='/create' component={AddExpensePage} />
                    <Route path='/edit/:id' component={EditExpensePage} />
                    <Route path='/help' component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );

};

export default AppRouter;