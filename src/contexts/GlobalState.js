import React, {createContext, useReducer} from 'react';
import {AppReducer} from './AppReducer';

const initialState = {
    transactions: [] // initially empty
}

// create context with initialState
export const GlobalContext = createContext(initialState);

// Provider
const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); // dispatch is AppReducer

    // add any transaction
    function addTransaction(transaction) {
        dispatch({ // calling dispatch by passing 'type' and a new transaction as a 'payload' 
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    // delete any transaction with that id
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, addTransaction, deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
      );
}
 
export default GlobalProvider;

