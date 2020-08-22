export const AppReducer = (state, action) => {
    switch(action.type){
        // if action.type is 'ADD_TRANSACTION' then add the action payload transaction to the current transaction
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                transactions: [...state.transactions, action.payload]
            }

        // else filter out any transaction that matches with the action payload id
        // only keep those transaction whose id don't match with the action payload id
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        default:
            return state;
    }
}