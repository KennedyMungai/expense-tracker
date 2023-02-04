import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () =>
{
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="new_expense__title">Title</label>
                    <input type="text" name="title" id="new_expense__title" />
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm