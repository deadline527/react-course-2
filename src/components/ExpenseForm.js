import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note:  props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100) : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined,
            previous: props.expense ? true : false
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onNoteAreaChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount ) {
            this.setState(() => ({ error: "Please enter both a description and amount" }));
        } else {
            this.setState(() => ({ error: undefined }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount * 100),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            })
        }
    }

    onDateChange = (createdAt) => {
        if ( createdAt ) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange} />
                    <input type="text"
                    value={this.state.amount}
                    placeholder="Amount"
                    onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange} 
                        numberOfMonths={1}
                        isOutsideRange={() => false }
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteAreaChange}>
                    </textarea>
                    { this.state.previous ? <input type="submit" value="Edit Expense" /> : <input type="submit" value="Add Expense" /> }
                </form>
            </div>
        )
    }
}