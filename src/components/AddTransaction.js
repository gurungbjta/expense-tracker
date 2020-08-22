import React, {useState, useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalState';

export const AddTransaction = () => {
    const [text, setText]= useState(''); // initial text is empty
    const [amount, setAmount] = useState(0); // initial amount is empty

    const {addTransaction} = useContext(GlobalContext); // use addTransaction from GlobalContext

    // handles new transaction
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { // new transaction with new id, text and amount
            id: Math.floor(Math.random() * 100000000),
            text, 
            amount: +amount // converting "amount" from string to number
        }
        setText('');
        setAmount('');

        addTransaction(newTransaction); // calling addTransaction by passing newTransaction as arg
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}> 
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
