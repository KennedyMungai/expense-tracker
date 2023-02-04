import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () =>
{
    const [enteredTitle, setEnteredTitle] = useState('')

    const titleChangeHandler = (e) => 
    {
        console.log(e.target.value)
    }

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="new_expense__title">Title</label>
                    <input type="text" name="title" id="new_expense__title" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="new_expense__amount">Amount</label>
                    <input type="number" name="amount" id="new_expense__amount" min='0.01' step='0.01' />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="new_expense__date">Date</label>
                    <input type="date" name="date" id="new_expense__date" min='2023-01-01' max='2025-12-31' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm