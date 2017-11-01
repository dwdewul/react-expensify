import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


const now = moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description 
            };
        });
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            };
        });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount
                }
            });
        };
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => {
                return {
                    createdAt
                };
            });
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        required
                    />

                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>
                        Add Expense
                    </button>
                </form>
            </div>
        );
    }
};

export default ExpenseForm;