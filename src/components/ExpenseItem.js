import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) =>
{
    // const expenseDate = new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67

    const month = props.date.toLocaleString('en-us', { month: 'long' })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-us', { day: '2-digit' })

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem