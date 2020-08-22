import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    // grabbing all amount from transaction and assigning to amounts
    const amounts = transactions.map(transaction => transaction.amount);

    // add all incomes from amounts
    const income = amounts
        .filter(item => item > 0) // only include positive item/amount
        .reduce((acc, item) => (acc += item), 0) // add all those items
        .toFixed(2); // round off to 2 decimal place

    // add all expenses from transactions
    const expense = (
        amounts
        .filter(item => item < 0) // only include negative item/amount
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">${expense}</p>
                </div>
            </div>
        </div>
    )
}
