import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) =>
{
    const clickHandler = () =>
    {
        console.log('I was clicked')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={() => console.log("Eye of the tiger")}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem