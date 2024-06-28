import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [transactionDate, setTransactionDate] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (description.trim() === '') {
      alert('Please enter a description');
      return;
    }

    const date = transactionDate === '' ? new Date().toISOString().split('T')[0] : transactionDate;

    if (expenseAmount !== 0) {
      const newExpenseTransaction = {
        id: Math.floor(Math.random() * 100000000),
        description,
        amount: -Math.abs(expenseAmount),
        date
      };
      addTransaction(newExpenseTransaction);
    }

    if (incomeAmount !== 0) {
      const newIncomeTransaction = {
        id: Math.floor(Math.random() * 100000000),
        description,
        amount: Math.abs(incomeAmount),
        date
      };
      addTransaction(newIncomeTransaction);
    }

    setDescription('');
    setExpenseAmount(0);
    setIncomeAmount(0);
    setTransactionDate('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="expenseAmount">Expense Amount <br />(negative - expense)</label>
          <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} placeholder="Enter expense amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="incomeAmount">Income Amount <br />(positive - income)</label>
          <input type="number" value={incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} placeholder="Enter income amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="transactionDate">Transaction Date</label>
          <input type="date" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
