import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext); // use transactions of GlobalContext

    // grabbing each transaction from transactions and assigning to amounts
    const amounts = transactions.map(transaction => transaction.amount);

    // adding all items in amounts and rounding off to 2 decimal points
    const total = amounts.reduce((acc, item) => (acc + item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
