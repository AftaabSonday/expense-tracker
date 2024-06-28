import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <span>{expense.description}</span> - <span>${expense.amount.toFixed(2)}</span> - <span>{expense.date.toLocaleDateString()}</span>
    </li>
  );
};

export default ExpenseItem;
