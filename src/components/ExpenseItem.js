import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) =>
{
    // const expenseDate = new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67

    return (
        <div className='expense-item'>
            <div>
                <div>{props.date.toLocaleString('en-us', { month: 'long' })}</div>
                <div>{props.date.getFullYear()}</div>
                <div>{props.date.toLocaleString('en-us', { day: '2-digit' })}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem