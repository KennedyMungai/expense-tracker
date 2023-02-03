import React from 'react'

const ExpenseDate = (props) =>
{
    const month = props.date.toLocaleString('en-us', { month: 'long' })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-us', { day: '2-digit' })

    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenseDate