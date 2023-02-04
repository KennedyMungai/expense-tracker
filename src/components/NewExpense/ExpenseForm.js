import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () =>
{
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(0)
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (e) => 
    {
        setEnteredTitle(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        // setUserInput((prevState) =>
        // {
        //     return { ...prevState, enteredTitle: e.target.value }
        // })
    }

    const amountChangeHandler = (e) => 
    {
        setEnteredAmount(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
    }

    const dateChangeHandler = (e) => 
    {
        setEnteredDate(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
    }

    const submitHandler = (e) => 
    {
        e.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)

        setEnteredAmount(0)
        setEnteredTitle('')
        setEnteredDate('')
    }

    return (
        <form
            action=""
            onSubmit={submitHandler}
        >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="new_expense__title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="new_expense__title"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="new_expense__amount">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="new_expense__amount"
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="new_expense__date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="new_expense__date"
                        min='2023-01-01'
                        max='2025-12-31'
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button
                    type='submit'
                >
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm