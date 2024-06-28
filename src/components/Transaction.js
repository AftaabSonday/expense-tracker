import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaTrash } from 'react-icons/fa';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.description} <span>{sign}${Math.abs(transaction.amount)}</span> <span>{transaction.date}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
        <FaTrash />
      </button>
    </li>
  );
};

export default Transaction;
