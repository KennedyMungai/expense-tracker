import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () =>
{
    const expenseDate = new Date(2021, 2, 28)
    const expenseTitle = 'Car Insurance'

    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    )
}

export default ExpenseItem