import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
    filteredTransactions: JSON.parse(localStorage.getItem('transactions')) || []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_TRANSACTION':
                const updatedTransactions = [action.payload, ...state.transactions];
                localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
                return {
                    ...state,
                    transactions: updatedTransactions,
                    filteredTransactions: updatedTransactions // Initialize filtered transactions
                };
            case 'DELETE_TRANSACTION':
                const filteredTransactions = state.transactions.filter(transaction => transaction.id !== action.payload);
                localStorage.setItem('transactions', JSON.stringify(filteredTransactions));
                return {
                    ...state,
                    transactions: filteredTransactions,
                    filteredTransactions // Maintain filtered transactions
                };
            case 'SET_FILTERED_TRANSACTIONS':
                return {
                    ...state,
                    filteredTransactions: action.payload
                };
            default:
                return state;
        }
    }, initialState);

    // Actions
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    const setFilteredTransactions = (transactions) => {
        dispatch({
            type: 'SET_FILTERED_TRANSACTIONS',
            payload: transactions
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            filteredTransactions: state.filteredTransactions,
            addTransaction,
            deleteTransaction,
            setFilteredTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
