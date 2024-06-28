import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))}
        </ul>
      ) : (
        <p>No expenses recorded.</p>
      )}
    </div>
  );
};

export default ExpenseList;
