import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    // if amount is greater than 0, then sign is '+' else '-'
    const sign = transaction.amount < 0 ? '-' : '+'; 

    return ( // className depends on the postive or negative amount to show red for expense and green for income
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>   {/* onClick of x button, call deleteTransaction by passing the transaction id  */}
        </li>
    )
}
